import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { name, company, email, phone, service, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: name, email, message" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error: dbError } = await supabase.from("contact_submissions").insert({
      name,
      company: company || "",
      email,
      phone: phone || "",
      service: service || "",
      message,
    });

    if (dbError) {
      console.error("DB insert error:", dbError);
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (resendApiKey) {
      const serviceLabel = service
        ? service.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase())
        : "General Inquiry";

      const emailBody = `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;width:140px;">Name</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
          ${company ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Company</td><td style="padding:8px;border:1px solid #ddd;">${company}</td></tr>` : ""}
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;"><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${phone}</td></tr>` : ""}
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Service</td><td style="padding:8px;border:1px solid #ddd;">${serviceLabel}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Message</td><td style="padding:8px;border:1px solid #ddd;">${message.replace(/\n/g, "<br>")}</td></tr>
        </table>
      `;

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Spartan Environmental Website <onboarding@resend.dev>",
          to: ["info@spartan-enviro.com"],
          reply_to: email,
          subject: `Website Contact: ${name}`,
          html: emailBody,
        }),
      });

      if (!resendRes.ok) {
        const resendErr = await resendRes.text();
        console.error("Resend error:", resendErr);
      }
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
