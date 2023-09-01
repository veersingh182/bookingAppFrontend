import styled from "styled-components";

const Mail = styled.div`
  width: 100%;
  margin-top: 5rem;
  background-color: #003580;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 5rem;
`;
const MailTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  color: #c7c7eb;
`;
const MailDesc = styled.span`
  font-size: 1.5rem;
  color: #c7c7eb;
`;
const MailInputContainer = styled.div``;
const Input = styled.input`
  width: 30rem;
  height: 4.5rem;
  padding: 1rem;
  border: none;
  margin-right: 1rem;
  border-radius: 5px;
`;
const Button = styled.button`
  height: 4.5rem;
  padding: 1rem;
  background-color: #0071c2;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const MailList = () => {
  return (
    <Mail>
      <MailTitle>Save time, Save money!</MailTitle>
      <MailDesc>Sign up and we'll send the best deals to you</MailDesc>
      <MailInputContainer>
        <Input type="text" placeholder="Your email address" />
        <Button>Subscribe</Button>
      </MailInputContainer>
    </Mail>
  );
};

export default MailList;
