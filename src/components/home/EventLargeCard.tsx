interface Props {
  title: string;
  content: string;
  image: string;
}

export default function EventLargeCard({ title, content, image }: Props) {
  return (
    <div className="relative flex h-auto min-w-[300px] flex-[2] flex-col gap-[16px] rounded border border-[#FFFFFF26] p-[36px]">
      <h5 className="text-2xl font-bold">{title}</h5>
      <div className="pb-[250px] text-xl font-normal">{content}</div>
      <img
        src={image}
        className="absolute bottom-[50px] left-[-80px] h-auto max-w-[100%] object-contain"
      />
    </div>
  );
}
