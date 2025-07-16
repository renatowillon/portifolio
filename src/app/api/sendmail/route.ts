import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "renatowillon@gmail.com",
      pass: process.env.EMAIL_KEY,
    },
  });

  try {
    await transporter.sendMail({
      from: "Portfolio Notificações",
      to: "renatowillon@gmail.com",
      subject: "Notificação do Portfolio",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px;">
  <!-- Header -->
  <div style="background: linear-gradient(315deg, rgba(19, 36, 61, 1) 0%, rgba(43, 127, 255, 1) 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; color: white;">
    <p style="margin: 10px 0 0 0; opacity: 0.9; font-weight: bold;">Você tem uma nova mensagem!</p>
  </div>
  
  <!-- Content -->
  <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    
    <!-- Detalhes do Agendamento -->
    <div style="background-color: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin-bottom: 20px; border-radius: 0 5px 5px 0;">
      <h2 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">📅 Detalhes da Mensagem</h2>
      
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">👤 Cliente:</td>
          <td style="padding: 8px 0; color: #333;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">✉️ Email:</td>
          <td style="padding: 8px 0; color: #333;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555;">📝 Mensagem:</td>
          <td style="padding: 8px 0; color: #333;">${message}</td>
        </tr>
      </table>
    </div>
    
    <!-- Status -->
    <div style="text-align: center; margin: 20px 0;">
      <div style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%); display: inline-block; padding: 12px 25px; border-radius: 25px; color: white; font-weight: bold;">
        ✅ Notificação
      </div>
    </div>
    
    <!-- Footer -->
    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
      <p style="color: #666; margin: 0; font-size: 12px;">
        Sistema de Notificação - Portifolio<br>
        Este é um email automático, não responda a esta mensagem.
      </p>
    </div>
  </div>
</div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Erro ao enviar o email", err },
      { status: 500 }
    );
  }
}
