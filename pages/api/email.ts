import type { NextApiRequest, NextApiResponse } from "next";
import sendGridMailer from "@sendgrid/mail";

type Data = {
  error: { message: string; code: number } | null;
};

sendGridMailer.setApiKey(process.env.SENDGRID_API_KEY || "");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, message } = req.body;
  try {
    await sendGridMailer.send({
      from: "atcheri@gmail.com",
      to: "atsuhiro@free.fr",
      subject: "Mail depuis Qui-suis-je",
      html: `<h3>${name}</h3><div>contacted you from "Qui-suis-je" postfolio site</div><div>Email ${email}</div><div>Message<p>${message}</p></div>`,
    });
    res.status(202).json({ error: null });
  } catch (err) {
    console.log("Sendgrid error:", err);
    res.status((err as any).code || 400).json({
      error: { message: "The email wasn't sent", code: (err as any).code },
    });
  }
}
