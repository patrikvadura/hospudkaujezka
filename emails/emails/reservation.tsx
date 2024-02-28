import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

const logo:string = `https://res.cloudinary.com/patrik-vadura/image/upload/v1709139336/hospudkaujezka/logo_default_ld5sw2.png`;

export const ReservationEmail = () => {
  const previewText:string = `Byla vytvořena nová rezervace od $name`;

  return (
    <Html>
      <Head />
      <Tailwind
          config={{
            theme: {
              colors: {
                red: {
                  '800': "#5c050c",
                }
              },
              extend: {
                colors: {
                  primary: {
                    DEFAULT: "#024940",
                    foreground: "#f8fbef",
                  },
                  secondary: {
                    DEFAULT: "#f8fbef",
                    foreground: "#024940",
                  },
                },
              },
            },
          }}
      >
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`${logo}`}
                width="100"
                alt="Hospůdka U Ježka"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-primary text-[24px] font-bold text-center p-0 my-[30px] mx-0">
              {previewText}
            </Heading>
            <Text className="text-black text-[14px] leading-[20px]">
              Jméno: <strong className="text-primary">$name</strong>
            </Text>
            <Text className="text-black text-[14px] leading-[20px]">
              Emailová adresa: <Link href={`mailto:$email`} className="font-bold text-primary no-underline">$email</Link>
            </Text>
            <Text className="text-black text-[14px] leading-[20px]">
              Zpráva: <br/>
              $message
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-primary rounded text-secondary text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={`mailto:$email`}
              >
                Reagovat na rezervaci
              </Button>
            </Section>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              Tenhle email byl vygenerován automaticky prostřednictvím webového serveru www.hospudkaujezka.cz. Na tenhle email prosím neodpovídejte.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ReservationEmail;
