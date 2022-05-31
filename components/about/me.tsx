import { Layout } from "../Layout";

interface MainProps {
    name: string;
    description: string;
}

export const Me = (props: MainProps) => {
    return (
        <Layout>
            <main className="my-8">
                <div className="mx-auto max-w-7xl">
                    <main className="my-8">
                        <div className="mx-auto">
                            <div className="px-4 sm:px-6 sm:text-center md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                                <div>
                                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-4xl xl:text-5xl">
                                        <span className="md:block">patrick's collections</span>{" "}
                                        <span className="text-indigo-400 md:block">About me</span>
                                    </h1>
                                    <div className="space-y-6  text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        <p>
                                            My name is Patrick Thach, and I was born in 1985; I am 37 years old as of
                                            this writing, with a wife and two daughters. I was born in Vietnam (Tra Vinh
                                            Province), but ethnically I am Khmer. My father passed away when I was five
                                            years old, so my birth mother soon gave me up for adoption. My adopted
                                            parents migrated to the US in 1995, where I was educated and earned my
                                            degree in software engineering. I am a software engineer by profession,
                                            specializing in medical reporting software. I have ADHD and am completely
                                            deaf in my left ear.
                                        </p>
                                        <p>
                                            I am fortunate to live on both sides of the world; I lived in the US,
                                            Europe, and ASEAN countries. I have lived dirt poor and mentally broken, and
                                            I also have lived a life with more privileges than many. I understand life
                                            as randomization, confusing, challenging, and rewarding at times, best
                                            illustrated in the form of abstract geometric arts.
                                        </p>
                                        <p>
                                            I found geometric arts at an early age; simply drawing them is
                                            self-rewarding in conjunction with haiku poems. From elementary school to my
                                            college years, while my teachers teach, you will find me drawing geometric
                                            arts on scratch pieces of paper, napkins, tissues, and both sides of stick
                                            notes. Even now, you may find me drawing geometric arts or writing haikus
                                            during meetings with colleagues or clients. ADHD is interesting such that it
                                            does not allow me to focus on uninteresting things.
                                        </p>

                                        <p>
                                            I follow Stoicism and the four virtues: wisdom, courage, moderation, and
                                            justice. In these four principles, I found tolerance in everyone regardless
                                            of their background. Stoicism allows me to enjoy simplicity at work, at
                                            home, in my family, and in my personality. I was also a Buddhist monk,
                                            following the Theravāda tradition, where I followed the ten precepts of
                                            Buddhism. As a layman, I follow the five precepts; refrain from taking life,
                                            refrain from taking what is not given, refrain from the misuse of the
                                            senses, refrain from wrong speech, and refrain from intoxicants that cloud
                                            the mind. I have learned about the people I have met, their suffering, and
                                            their happiness. I am forever grateful for the people I loved and the people
                                            I despised over the years. We are of one tree; if the wind rattle leaves on
                                            the other side of the tree, it will eventually rattle this side.
                                        </p>
                                        <p>
                                            I hope for my art collection to be gazed at by everyone digitally online and
                                            in their physical form from a short distance at home, in the workspace, in
                                            art galleries, and wherever possible. While looking at my geometric arts, I
                                            hope people reflect on their lives over the years and be at peace for who
                                            they are. My wealth may soon dwindle, my physical body will soon fall apart,
                                            and my mind will soon deteriorate, but my collections I hope for it to live
                                            into future generations.
                                        </p>
                                    </div>
                                    <div className="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">
                                        Thanks,
                                    </div>
                                    <div className="my-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                                        <div className="flex flex-wrap items-start justify-between">
                                            <div className="flex justify-center px-1">
                                                <img
                                                    className="h-9 sm:h-10"
                                                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                                                    alt="StaticKit"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>{" "}
                </div>
            </main>
        </Layout>
    );
};

export default Me;
