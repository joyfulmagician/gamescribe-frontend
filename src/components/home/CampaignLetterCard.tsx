export default function CampaignLetterCard() {
  return (
    <div className="flex min-w-[300px] flex-1 flex-col gap-[36px]">
      <h4 className="text-3xl font-bold">Upcoming Campaigns</h4>

      <div className="text-xl font-normal">
        Join the gaming revolution with GameScribe.ai! Unleash the power of
        artificial intelligence and take your gaming experience to the next
        level. Our innovative platform combines cutting-edge technology and
        immersive storytelling to create captivating narratives tailored
        specifically to your gameplay. Immerse yourself in rich, dynamic worlds,
        where your choices shape the outcome of the game. Whether you're a
        seasoned gamer or just starting your adventure, GameScribe.ai will
        transport you to a realm of endless possibilities. Get ready to embark
        on the gaming journey of a lifetime!
      </div>

      <div>
        <button className="rounded-[32px] border border-[#7173FA] px-[24px] py-[12px] text-base text-[#7173FA]">
          Explore All
        </button>
      </div>
    </div>
  );
}
