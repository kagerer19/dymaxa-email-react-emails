import * as React from "react";
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Text,
    Tailwind, Section,
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
                                    Application from (applicantName) Received
                                    <hr style={{
                                        margin: '20px 0',
                                        border: 'none',
                                        borderBottom: '1px solid #ccc',
                                        padding: '0.5em'
                                    }}/>
                                    <Text className="text-lg font-medium text-gray p-6">
                                        (applicantName) Applied for Regional nurse position with
                                        JOB-ID:(#34567897654324567)
                                    </Text>
                                </Heading>
                                <Section className="font-sans font-medium">
                                    <Text>
                                        Name: Applicant name
                                    </Text>
                                    <Text>
                                        Email: Applicant Email
                                    </Text>
                                    <Text>
                                        Contact Number: Applicant Contact Number
                                    </Text>
                                    <Text>
                                        Linkedin Profile: Applicant Linkedin Profile
                                    </Text>
                                    <Text>
                                        Additional Notes: Applicant wants you to know
                                    </Text>
                                    <Text>
                                        Job ID: (Name Of Job)
                                    </Text>
                                </Section>
                                <div className="flex flex-row gap-5 justify-center">
                                    <Img
                                        className=""
                                        src={'/static/applicant-files.png'}
                                        width="88"
                                        height="88"
                                        alt="Clover"
                                    />
                                    <Img
                                        className=""
                                        src={'/static/applicant-files.png'}
                                        width="88"
                                        height="88"
                                        alt="Clover"
                                    />
                                </div>
                                <hr style={{
                                    margin: '20px 0',
                                    border: 'none',
                                    borderBottom: '1px solid #ccc',
                                    padding: '0.5em'
                                }}/>
                                <Text className="text-xs text-gray p-4">
                                    Dymaxa Recruiting Solutions | Address, City | Follow us on [Facebook](#) |
                                    [LinkedIn](#)
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
