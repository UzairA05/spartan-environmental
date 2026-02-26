/*
  # Create contact_submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `company` (text)
      - `email` (text, required)
      - `phone` (text)
      - `service` (text)
      - `message` (text, required)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Allow anonymous INSERT so website visitors can submit the form
    - No SELECT policy for public (submissions are private to admins)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  company text DEFAULT '',
  email text NOT NULL DEFAULT '',
  phone text DEFAULT '',
  service text DEFAULT '',
  message text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
