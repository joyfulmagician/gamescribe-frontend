interface Props {
  title: string;
  content: string;
  image: string;
}

export default function EventSmallCard({ title, content, image }: Props) {
  return (
    <div className="relative flex h-auto min-w-[250px] flex-1 flex-col gap-[16px] rounded border border-[#FFFFFF26] p-[36px]">
      <h5 className="text-2xl font-bold">{title}</h5>
      <div className="pb-[250px] text-xl font-normal">{content}</div>
      <img
        src={image}
        className="absolute bottom-[-20px] left-[54px] h-auto max-w-[100%] object-contain"
      />
    </div>
  );
}
