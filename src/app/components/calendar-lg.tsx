type CalendarProp = {
  day: number;
};

const CalendarCell = ({ day }: CalendarProp) => {
  return (
    <div className="border border-gray-200 p-4 pointer-events-auto cursor-pointer">
      {day}
      <div className="my-1 text-xs text-slate-600 text-clip">
        3 events, 4 reminders
      </div>
    </div>
  );
};

export const CalendarLarge = () => {
  const days = Array(30)
    .fill(0)
    .map((v, ind) => ind + 1);
  return (
    <div
      className="grid grid-cols-7"
      style={{
        gridTemplateColumns: "repeat(7, 1fr)",
        gridTemplateRows: "repeat(5, minmax(6rem, auto))",
      }}
    >
      {...days.map((v, ind) => <CalendarCell key={ind} day={v} />)}
    </div>
  );
};
