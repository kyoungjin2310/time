import TimePicker from "./TimePicker";
interface Props {
  obj: {
    div: string;
    subDiv: string;
    startTime: number;
    endTime: number;
  };
}

const TimeCard = ({ obj }: Props) => {
  return (
    <>
      <div>
        <TimePicker time={obj.startTime} />
        <TimePicker time={obj.endTime} />
      </div>
    </>
  );
};

export default TimeCard;
