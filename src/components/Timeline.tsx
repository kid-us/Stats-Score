interface Props {
  label: string;
}

const TimelineDivider = ({ label }: Props) => (
  <div className="flex items-center justify-center w-full">
    <hr className="border-[#292B41] w-full" />
    <p className="text-[12px] lg:w-1/2 w-full text-center">{label}</p>
    <hr className="border-[#292B41] w-full" />
  </div>
);

export default TimelineDivider;
