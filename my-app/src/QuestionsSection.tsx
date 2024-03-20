import FAQ from "./components/FAQ";

export default function QuestionsSection() {
    return (
      <>
        <div className="grid h-[1550px] bg-center bg-[url('../public/sponsorsbackground.png')] -mb-[130px] bg-auto">
                <div className="bg-[url('../public/swoosh.png')] bg-right h-full mix-blend-overlay col-start-1 row-start-1"/>
                <div className="flex flex-row px-8 pt-12 sm:px-16 mt-6 sm:mt-12 mb-2 sm:mb-4 mx-auto col-start-1 row-start-1">
                    <img className="self-start mt-1" src="/FAQ.svg" alt="FAQ"/>
                    <div className="flex flex-col space-y-16 flex-1 text-xs sm:text-sm px-4 sm:px-8">
                        <FAQ title="What is a hackathon?" content="A hackathon is an event where creative minds come together to create amazing projects in a short time frame! We are tech oriented, and HackDartmouth is focused primarily on software and hardware hacks. Come with an idea, or just to have a fun time!" />
                        <FAQ title="Who can attend?" content="Any college/graduate student! No experience necessary--you'll have the chance to pick up new skills from our workshops during the hackathon!" />
                        <FAQ title="Do I need experience?" content="Depends on what you're looking to make! A little background in programming will be helpful, but you'll have plenty of opportunity to join teams and learn from Dartmouth students, students from other schools, and mentors. We’ll also have workshops if you are interested in learning a particular skill. There is plenty of time to learn something new!" />
                        <FAQ title="What if I don't have a team or an idea?" content="No worries! While teams can be specified on the application, you won't officially create your team until the event. We hold a team formation social before the hacking begins." />
                        <FAQ title="What can I build?" content="A panel of judges will decide on the winning hacks based on criteria of creativity, usefulness, technical difficulty, and form. The top prizes are TBA. Previous prizes have included drones, Apple watches, Nintendo switches, bluetooth speakers, and other awesome tech." />
                    </div>
                    <div className="flex flex-col space-y-16 flex-1 sm:text-sm px-4 sm:px-8 text-xs px-4">
                        <FAQ title="What can I win?" content="A panel of judges will decide on the winning hacks based on criteria of creativity, usefulness, technical difficulty, and form. The top prizes are TBA. Previous prizes have included drones, Apple watches, Nintendo switches, bluetooth speakers, and other awesome tech." />
                        <FAQ title="What is the deadline to register?" content="The application deadline for Dartmouth students is April 15th, and the deadline for anyone not a Dartmouth student is March 8th" />
                        <FAQ title="What kind of workshops/activities will there be?" content="We host a variety of workshops and activities each year. We're still finalizing the list for HackDartmouth VII, but it'll include how to get started in web dev, how to deploy your product, some design basics, and more!" />
                        <FAQ title="How can I be a part of HackDartmouth?" content="We're always looking for new members excited about putting together hackathons! Generally, we send out a recruiting email in the Fall, but feel free to reach out to us at team@hackdartmouth.org if you're interested in joining in the off-season" />
                        <FAQ title="What if I have other questions?" content="Shoot us an email at team@hackdartmouth.org and we’ll get back to you as soon as we can!" />
                        <FAQ title="MLH code of conduct" content="The MLH Code of Conduct can be found on their website" />
                    </div>
                </div>

        </div>
      </>
    )
}