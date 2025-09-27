import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Template HTML baseado no design fornecido
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Novo Contato - Landing Page</title>
          <style>
              body {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                  padding: 0;
                  margin: 0;
                  width: 100%;
                  min-height: 100vh;
              }
              .email-container {
                  width: 100%;
                  max-width: 100%;
                  margin: 0;
                  background: white;
                  overflow: hidden;
                  min-height: 100vh;
              }
              .email-header {
                  background: linear-gradient(135deg, #2196F3, #21CBF3);
                  color: white;
                  padding: 30px;
                  text-align: center;
              }
              .email-header h1 {
                  margin: 0;
                  font-size: 24px;
                  font-weight: 600;
              }
              .email-body {
                  padding: 40px;
                  min-height: calc(100vh - 200px);
              }
              .contact-info {
                  background: #f8fafc;
                  padding: 25px;
                  border-radius: 10px;
                  margin: 20px 0;
                  border-left: 4px solid #2196F3;
              }
              .contact-info h3 {
                  color: #2196F3;
                  margin-top: 0;
                  font-size: 18px;
              }
              .info-row {
                  display: flex;
                  align-items: center;
                  margin: 12px 0;
                  padding: 8px 0;
              }
              .info-icon {
                  width: 20px;
                  height: 20px;
                  margin-right: 12px;
                  font-size: 16px;
              }
              .info-label {
                  font-weight: 600;
                  color: #374151;
                  min-width: 180px;
              }
              .info-value {
                  color: #6b7280;
              }
              .message-section {
                  background: white;
                  padding: 25px;
                  border-radius: 10px;
                  margin: 20px 0;
                  border: 2px solid #e5e7eb;
              }
              .message-section h3 {
                  color: #374151;
                  margin-top: 0;
              }
              .message-text {
                  line-height: 1.7;
                  color: #4b5563;
                  font-size: 15px;
                  white-space: pre-wrap;
              }
              .reply-tip {
                  background: #eff6ff;
                  padding: 20px;
                  border-radius: 8px;
                  margin-top: 30px;
                  border: 1px solid #bfdbfe;
              }
              .reply-tip p {
                  margin: 0;
                  color: #1e40af;
                  font-size: 14px;
              }
              .email-footer {
                  background: #f9fafb;
                  padding: 20px;
                  text-align: center;
                  color: #6b7280;
                  font-size: 12px;
              }
              .from-info {
                  background: #fef3c7;
                  padding: 15px;
                  border-radius: 8px;
                  margin-bottom: 20px;
                  border: 1px solid #fbbf24;
              }
              .from-info p {
                  margin: 5px 0;
                  color: #92400e;
                  font-size: 13px;
              }
              .email-address {
                  color: #2196F3 !important;
                  text-decoration: none;
              }
              @media (max-width: 600px) {
                  .email-body {
                      padding: 20px;
                  }
                  .info-row {
                      flex-direction: column;
                      align-items: flex-start;
                  }
                  .info-label {
                      min-width: auto;
                      margin-bottom: 4px;
                  }
              }
          </style>
      </head>
      <body>
          <div class="email-container">
              <!-- Header do Email -->
              <div class="email-header">
                  <h1>📧 Novo Contato Recebido</h1>
              </div>

              <!-- Corpo do Email -->
              <div class="email-body">
                  <!-- Info sobre remetente -->
                  <div class="from-info">
                      <p><strong>De:</strong> ${body.email || "Não informado"}</p>
                      <p><strong>Para:</strong> ${process.env.CONTACT_EMAIL}</p>
                      <p><strong>Assunto:</strong> 💼 Novo contato: ${body.fullName || "Lead"} - ${body.company || "Empresa"}</p>
                  </div>

                  <!-- Informações do Contato -->
                  <div class="contact-info">
                      <h3>👤 Informações do Contato</h3>
                      
                      <div class="info-row">
                          <span class="info-icon">👤</span>
                          <span class="info-label">Nome Completo:</span>
                          <span class="info-value">${body.fullName || "Não informado"}</span>
                      </div>
                      
                      <div class="info-row">
                          <span class="info-icon">🏢</span>
                          <span class="info-label">Empresa/Organização:</span>
                          <span class="info-value">${body.company || "Não informado"}</span>
                      </div>
                      
                      <div class="info-row">
                          <span class="info-icon">📧</span>
                          <span class="info-label">E-mail:</span>
                          <span class="info-value"><a href="mailto:${body.email || ""}" class="email-address">${body.email || "Não informado"}</a></span>
                      </div>
                      
                      <div class="info-row">
                          <span class="info-icon">🎯</span>
                          <span class="info-label">Tipo de Participação:</span>
                          <span class="info-value">${body.participationType || "Não informado"}</span>
                      </div>
                      
                      <div class="info-row">
                          <span class="info-icon">📅</span>
                          <span class="info-label">Data Estimada do Evento:</span>
                          <span class="info-value">${body.estimatedDate || "Não informado"}</span>
                      </div>
                  </div>

                  ${
                    body.message
                      ? `
                  <!-- Mensagem -->
                  <div class="message-section">
                      <h3>💬 Mensagem / Detalhes</h3>
                      <div class="message-text">${body.message}</div>
                  </div>
                  `
                      : ""
                  }

                  <!-- Dica de Resposta -->
                  <div class="reply-tip">
                      <p><strong>💡 Dica:</strong> Clique em "Responder" para responder diretamente para ${body.email || "o cliente"}. O email será enviado automaticamente para o endereço correto do cliente.</p>
                  </div>
              </div>

              <!-- Footer -->
              <div class="email-footer">
                  <p>Este email foi enviado através do formulário de contato da sua landing page.</p>
                  <p>Data: ${new Date().toLocaleDateString("pt-BR", {
                    timeZone: "America/Sao_Paulo",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })} • Hora: ${new Date().toLocaleTimeString("pt-BR", {
                    timeZone: "America/Sao_Paulo",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}</p>
              </div>
          </div>
      </body>
      </html>
    `;

    // Template de texto simples melhorado
    const textTemplate = `
    🔔 NOVO CONTATO RECEBIDO - LANDING PAGE
    ═══════════════════════════════════════
    
    📋 INFORMAÇÕES DO CONTATO:
    ──────────────────────────
    👤 Nome: ${body.fullName || "Não informado"}
    🏢 Empresa: ${body.company || "Não informado"}
    📧 Email: ${body.email || "Não informado"}
    🎯 Tipo de Participação: ${body.participationType || "Não informado"}
    📅 Data Estimada: ${body.estimatedDate || "Não informado"}
    
    ${
      body.message
        ? `💬 MENSAGEM:
    ──────────────
    ${body.message}
    `
        : ""
    }
    ═══════════════════════════════════════
    📅 Recebido em: ${new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    })}
    🤖 Sistema: Landing Page Contact Form
    `;

    await transporter.sendMail({
      from: `"🚀 Landing Page" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: body.email, // Configura o reply-to para o email do cliente
      subject: `💼 Novo contato: ${body.fullName || "Lead"} - ${body.company || "Empresa"}`,
      text: textTemplate,
      html: htmlTemplate,
    });

    return NextResponse.json({
      success: true,
      message: "Email enviado com sucesso!",
    });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Erro interno do servidor",
      },
      {
        status: 500,
      },
    );
  }
}
