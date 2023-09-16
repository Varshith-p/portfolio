interface EmailTemplateProps {
  name: string;
  email?: string;
  message?: string;
}

const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => (
  <div>
    <p>New message from {name}</p>
    <p>Email: {email}</p>
    <div>Message: {message}</div>
  </div>
);

export default EmailTemplate;
