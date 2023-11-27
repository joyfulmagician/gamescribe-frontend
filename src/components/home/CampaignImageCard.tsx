export default function CampaignImageCard() {
  return (
    <div className="flex min-w-[300px] flex-1 flex-col justify-center gap-[36px] rounded">
      <img
        src="/images/campaign-image.png"
        className="max-w-[100%] object-contain"
      />
    </div>
  );
}
