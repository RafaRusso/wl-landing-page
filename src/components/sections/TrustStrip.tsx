import { siteConfig } from "../../config/site-config";
import Icon from "../ui/icon";

const TrustStrip = () => {
  const { items } = siteConfig.sections.trustStrip;

  return (
    <div className="bg-secondary/10 py-8 border-y border-primary/5">
      <div className="container-narrow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center justify-center md:justify-start gap-3">
              <div className="text-accent">
                <Icon name={item.icon} size={20} />
              </div>
              <span className="text-sm font-bold text-primary/80 uppercase tracking-widest leading-none">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
