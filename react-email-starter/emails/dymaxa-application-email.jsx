import * as React from "react";
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Text,
    Tailwind,
    Button,
} from "@react-email/components";

const email = () => {
    return (
        <Html>
            <Head>
                <Tailwind>
                    <Body className="bg-white my-12 mx-auto font-sans">
                        <Text>
                            <Container className="p-6 rounded-lg mx-auto shadow-lg text-center">
                                <Img
                                    className="mx-auto"
                                    src={'/static/Dymaxa-logo.png'}
                                    width="88"
                                    height="88"
                                    alt="Clover"
                                />
                                <Heading className="text-xl font-medium text-gray tex-center">
                                    Dymaxa Recruiting solutions
                                </Heading>
                                <Heading className="text-lg pt-6 text-center">
                                    Application Received, Hi (applicantName)!
                                    <hr style={{ margin: '20px 0', border: 'none', borderBottom: '1px solid #ccc', padding: '0.5em' }} />
                                    <Text className="text-lg font-medium text-gray p-6">
                                        Your application has been received, and we appreciate your interest in joining Dymaxa Recruiting Solutions.
                                        We will review your application shortly and aim to get back to you within 2 weeks.
                                    </Text>
                                </Heading>
                                <Text className="text-lg font-medium text-gray pt-2">
                                    If you have further questions please contact us!
                                </Text>
                                <Button className="bg-[#3C3F43] text-white font-bold p-5 rounded"
                                        href="https://dymaxa.co.za/jobs/"
                                >
                                    Contact us
                                </Button>
                                <hr style={{ margin: '20px 0', border: 'none', borderBottom: '1px solid #ccc', padding: '0.5em' }} />
                                <Text className="text-xs text-gray p-4">
                                    Dymaxa Recruiting Solutions | Address, City | Follow us on [Facebook](#) | [LinkedIn](#)
                                </Text>

                            </Container>
                        </Text>
                    </Body>
                </Tailwind>
            </Head>
        </Html>
    )
}

export default email;
