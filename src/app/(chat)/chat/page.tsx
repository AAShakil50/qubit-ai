import { CalendarLarge } from "@/app/components/calendar-lg";
import { Kanit, Josefin_Sans } from "next/font/google";

const kanit = Kanit({ subsets: ["latin"], weight: ["400", "500", "600"] });
const josefin = Josefin_Sans({ subsets: ["latin"] });

export default function Chat() {
  return (
      <article className="flex-grow grid grid-cols-1 sm:grid-cols-2 overflow-hidden">
        <section
          id="chat_section"
          className={`${josefin.className} flex flex-col justify-between flex-grow overflow-hidden`}
        >
          <div id="message_list" className="overflow-y-auto max-h-full mt-16">
            <div className="mb-8">
              <div
                className={`${kanit.className} mx-16 text-2xl font-bold tracking-wider`}
              >
                Chat
              </div>
              <div className="mx-16 text-slate-700">
                Ask the Qubit Assistant about your calendar.
              </div>
            </div>
            <div className="mt-4 mx-16"></div>
            <MessageCard
              sender="Qubit"
              message="Tomorrow at 5PM, you have a meeting with the design team. After
                that you have to attend John's birthday party. Any other
                query about your schedule?"
            />
            <MessageCard sender="User" message="What time is the meeting?" />
            <MessageCard sender="Qubit" message="The meeting is at 5PM." />
            <MessageCard
              sender="User"
              message="I want to create another meeting."
            />
            <MessageCard
              sender="Qubit"
              message="To create a meeting, give me the title, description and time of the meeting."
            />
            <MessageCard
              sender="User"
              message="The meeting is on Saturday this weekend about our next investment
              on the Curveland Club. Important things to notice are to get some Research Papers,
              Some data about previous investments, gross margin, potential margin, etc."
            />
            <MessageCard
              sender="Qubit"
              message="The meeting is scheduled on Saturday at 10AM. Anything else?"
            />
            <MessageCard
              sender="User"
              message="No, that's all. Thanks for the help."
            />
            <MessageCard
              sender="Qubit"
              message="You're welcome. Have a nice day!"
            />
          </div>
          <div id="input_prompt" className="mt-8 mb-16 mx-16">
            <div className={`${kanit.className} text-lg font-medium`}>User</div>
            <textarea
              className="w-full min-h-16 max-h-32 line-clamp-3 mt-2 p-4 border border-slate-200 rounded-lg
                 text-slate-600 focus:outline-slate-300"
              placeholder="Type your message here..."
            />
          </div>
        </section>
        <section
          id="result_section"
          className={`${josefin.className} flex-grow m-16`}
        >
          <div>
            <div
              className={`${kanit.className} text-2xl font-bold tracking-wider`}
            >
              Calendar
            </div>
            <div className="text-slate-700">
              Interact with the Qubit Assistant for Calendar options.
            </div>
          </div>
          <div className="flex-grow mt-8">
            <CalendarLarge />
          </div>
        </section>
      </article>
  );
}

interface MessageCardProps {
  sender: string;
  message: string;
}

const MessageCard = ({ sender, message }: MessageCardProps) => {
  return (
    <div className="mt-2 mx-16">
      <div className={`${kanit.className} text-lg font-medium`}>{sender}</div>
      <div className={`text-lg text-slate-600 leading-5`}>{message}</div>
    </div>
  );
};
