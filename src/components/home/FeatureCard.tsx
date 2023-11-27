interface Props {
  icon: string;
  title: string;
  content: string;
}

export default function FeatureCard({ icon, title, content }: Props) {
  return (
    <div className="flex min-w-[300px] flex-1 flex-col gap-[16px] rounded border border-[#FFFFFF26] p-[36px]">
      <div className="flex flex-row gap-[36px]">
        <img src={icon} />
        <h6 className="text-xl font-bold">{title}</h6>
      </div>
      <div className="">{content}</div>
    </div>
  );
}
