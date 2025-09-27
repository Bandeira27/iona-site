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

    // Template HTML otimizado para mobile
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="format-detection" content="telephone=no">
          <meta name="format-detection" content="date=no">
          <meta name="format-detection" content="address=no">
          <meta name="format-detection" content="email=no">
          <title>Novo Contato - Landing Page</title>
          <style>
              /* Reset básico para emails */
              * {
                  box-sizing: border-box;
              }
              
              body, table, td, p, a, li, blockquote {
                  -webkit-text-size-adjust: 100%;
                  -ms-text-size-adjust: 100%;
              }
              
              body {
                  font-family: Arial, Helvetica, sans-serif !important;
                  background-color: #f5f5f5;
                  padding: 0;
                  margin: 0;
                  width: 100% !important;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
              }
              
              /* Container principal usando table para compatibilidade */
              .email-wrapper {
                  width: 100% !important;
                  background-color: #f5f5f5;
                  padding: 10px 0;
              }
              
              .email-container {
                  width: 100%;
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: #ffffff;
                  border-radius: 8px;
                  overflow: hidden;
                  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              }
              
              /* Header */
              .email-header {
                  background: linear-gradient(135deg, #2196F3, #21CBF3);
                  color: white;
                  padding: 20px;
                  text-align: center;
              }
              
              .email-header h1 {
                  margin: 0;
                  font-size: 20px;
                  font-weight: 600;
                  line-height: 1.4;
              }
              
              /* Body content */
              .email-body {
                  padding: 20px;
              }
              
              /* From info box */
              .from-info {
                  background-color: #fff9e6;
                  border: 1px solid #ffd700;
                  border-radius: 6px;
                  padding: 15px;
                  margin-bottom: 20px;
              }
              
              .from-info p {
                  margin: 5px 0;
                  color: #8b5a00;
                  font-size: 13px;
                  line-height: 1.4;
              }
              
              /* Contact info section */
              .contact-info {
                  background-color: #f8faff;
                  border-left: 4px solid #2196F3;
                  border-radius: 6px;
                  padding: 20px;
                  margin: 20px 0;
              }
              
              .contact-info h3 {
                  color: #2196F3;
                  margin: 0 0 15px 0;
                  font-size: 16px;
                  font-weight: 600;
              }
              
              /* Info rows - usando table para melhor compatibilidade */
              .info-table {
                  width: 100%;
                  border-collapse: collapse;
              }
              
              .info-row {
                  border-bottom: 1px solid #e5e7eb;
              }
              
              .info-row:last-child {
                  border-bottom: none;
              }
              
              .info-row td {
                  padding: 12px 0;
                  vertical-align: top;
              }
              
              .info-icon {
                  width: 30px;
                  font-size: 16px;
                  text-align: center;
              }
              
              .info-label {
                  font-weight: 600;
                  color: #374151;
                  font-size: 14px;
                  width: 40%;
                  min-width: 120px;
              }
              
              .info-value {
                  color: #6b7280;
                  font-size: 14px;
                  word-break: break-word;
              }
              
              /* Message section */
              .message-section {
                  background-color: #ffffff;
                  border: 2px solid #e5e7eb;
                  border-radius: 6px;
                  padding: 20px;
                  margin: 20px 0;
              }
              
              .message-section h3 {
                  color: #374151;
                  margin: 0 0 15px 0;
                  font-size: 16px;
                  font-weight: 600;
              }
              
              .message-text {
                  line-height: 1.6;
                  color: #4b5563;
                  font-size: 14px;
                  white-space: pre-wrap;
                  word-wrap: break-word;
                  overflow-wrap: break-word;
              }
              
              /* Reply tip */
              .reply-tip {
                  background-color: #eff6ff;
                  border: 1px solid #bfdbfe;
                  border-radius: 6px;
                  padding: 15px;
                  margin-top: 20px;
              }
              
              .reply-tip p {
                  margin: 0;
                  color: #1e40af;
                  font-size: 13px;
                  line-height: 1.5;
              }
              
              /* Footer */
              .email-footer {
                  background-color: #f9fafb;
                  padding: 15px 20px;
                  text-align: center;
                  color: #6b7280;
                  font-size: 11px;
                  line-height: 1.4;
              }
              
              .email-footer p {
                  margin: 5px 0;
              }
              
              /* Links */
              .email-address {
                  color: #2196F3 !important;
                  text-decoration: none;
                  word-break: break-all;
              }
              
              /* Media queries para dispositivos móveis */
              @media only screen and (max-width: 600px) {
                  .email-wrapper {
                      padding: 5px !important;
                  }
                  
                  .email-container {
                      border-radius: 4px !important;
                  }
                  
                  .email-header {
                      padding: 15px !important;
                  }
                  
                  .email-header h1 {
                      font-size: 18px !important;
                  }
                  
                  .email-body {
                      padding: 15px !important;
                  }
                  
                  .contact-info, 
                  .message-section,
                  .from-info,
                  .reply-tip {
                      padding: 15px !important;
                      margin: 15px 0 !important;
                  }
                  
                  .info-label {
                      width: 100% !important;
                      min-width: auto !important;
                      padding-bottom: 5px !important;
                      display: block !important;
                  }
                  
                  .info-value {
                      display: block !important;
                      padding-top: 0 !important;
                  }
                  
                  .info-row td {
                      display: block !important;
                      width: 100% !important;
                      padding: 8px 0 !important;
                  }
                  
                  .info-icon {
                      display: inline !important;
                      width: auto !important;
                      margin-right: 8px !important;
                  }
              }
              
              /* Clientes de email específicos */
              @media only screen and (max-width: 480px) {
                  .email-body {
                      padding: 10px !important;
                  }
                  
                  .contact-info, 
                  .message-section,
                  .from-info,
                  .reply-tip {
                      padding: 12px !important;
                  }
                  
                  .email-header h1 {
                      font-size: 16px !important;
                  }
              }
          </style>
      </head>
      <body>
          <div class="email-wrapper">
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
                          
                          <table class="info-table">
                              <tr class="info-row">
                                  <td class="info-icon">👤</td>
                                  <td class="info-label">Nome Completo:</td>
                                  <td class="info-value">${body.fullName || "Não informado"}</td>
                              </tr>
                              
                              <tr class="info-row">
                                  <td class="info-icon">🏢</td>
                                  <td class="info-label">Empresa/Organização:</td>
                                  <td class="info-value">${body.company || "Não informado"}</td>
                              </tr>
                              
                              <tr class="info-row">
                                  <td class="info-icon">📧</td>
                                  <td class="info-label">E-mail:</td>
                                  <td class="info-value"><a href="mailto:${body.email || ""}" class="email-address">${body.email || "Não informado"}</a></td>
                              </tr>
                              
                              <tr class="info-row">
                                  <td class="info-icon">🎯</td>
                                  <td class="info-label">Tipo de Participação:</td>
                                  <td class="info-value">${body.participationType || "Não informado"}</td>
                              </tr>
                              
                              <tr class="info-row">
                                  <td class="info-icon">📅</td>
                                  <td class="info-label">Data Estimada do Evento:</td>
                                  <td class="info-value">${body.estimatedDate || "Não informado"}</td>
                              </tr>
                          </table>
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
          </div>
      </body>
      </html>
    `;

    // Template de texto simples (mantido igual)
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
      replyTo: body.email,
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