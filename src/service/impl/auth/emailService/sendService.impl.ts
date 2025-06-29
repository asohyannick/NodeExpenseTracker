import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER as string,
    pass: process.env.GMAIL_PASS as string,
  },
});

const sendEmail = async (to: string) => {
  const subject = 'Maximize Your Finances with Our Expense Tracker';

  const html = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            padding: 20px;
            line-height: 1.6;
          }
          .container {
            background: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
          h1 {
            color: #4CAF50;
          }
          h2 {
            color: #333;
          }
          p {
            margin: 10px 0;
          }
          .footer {
            margin-top: 20px;
            font-size: 0.9em;
            color: #777;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Dear Client,</h1>
          <p>I hope this message finds you well.</p>
          <p>I wanted to take a moment to emphasize the importance of managing your finances effectively. With our Node.js Expense Tracker application, you can gain valuable insights into your spending habits and make informed decisions to enhance your financial health.</p>
          
          <h2>Benefits of Using Our Expense Tracker:</h2>
          <ul>
            <li><strong>Track Your Spending:</strong> Easily categorize and monitor your expenses to identify where your money is going.</li>
            <li><strong>Set Budgets:</strong> Establish budgets for different categories to ensure you stay within your financial limits.</li>
            <li><strong>Analyze Trends:</strong> View reports and trends over time to understand your financial patterns and make necessary adjustments.</li>
            <li><strong>Achieve Financial Goals:</strong> Use the insights gained to save for future goals, whether it's a vacation, a new purchase, or building an emergency fund.</li>
          </ul>
          
          <p>Our application is designed to be user-friendly, making it easier for you to take control of your finances and make informed choices.</p>
          <p>If you have any questions or need assistance getting started, please don't hesitate to reach out. We’re here to help you make the most of your money!</p>
          
          <div class="footer">
            <p>Best Regards,</p>
            <p>[Asoh Yannick]<br>[Full Stack Developer]<br>[codingLamb]<br>[codinglamb@gmail.com]</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.GMAIL_USER as string,
    to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
export default sendEmail;