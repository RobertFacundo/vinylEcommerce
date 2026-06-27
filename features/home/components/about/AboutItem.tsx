import type { ItemsType } from "@/shared/data/AboutItems";

type AboutItemProps = {
  item: ItemsType;
};

const AboutItem = ({ item }: AboutItemProps) => {
  const Icon = item.icon;

  return (
    <div className="flex flex-col gap-2 items-center">
      <Icon className="w-8 h-8" />
      <h3 className="font-semibold">{item.title}</h3>
      <p className="opacity-70 text-sm text-center">{item.subtitle}</p>
    </div>
  );
};

export default AboutItem;