export const menus = [
  {
    label: "Ana Səhifə",
    to: "/",
  },
  {
    label: "Haqqımızda",
    to: "/about",
  },
  {
    label: "Şirkətlərimiz",
    to: "/",
    children: [
      {
        label: "Yusuf-UM MMC",
        to: "/yusifummmc",
        children: [
          {
            label: "Su əsaslı  boyalar",
            to: "/suesasliboyalar",
          },
          {
            label: "Sellozik boyalar",
            to: "/sellozikboyalar",
          },
          {
            label: "Hammenton boyalar",
            to: "/hammentonboyalar",
          },
          {
            label: "Sintetik boyalar",
            to: "/sintetikboyalar",
          },
          {
            label: "Sənaye boyaları",
            to: "/sənayeboyalari",
          },
          {
            label: "Sellozik ve Sintetik tiner",
            to: "/sellozikvesintetiktiner",
          },
        ],
      },
      {
        label: "Unity MMC",
        to: "/unity",
        children: [
          {
            label: "Maliyyə və Mühasibatlıq",
            to: "/maliyyevemuhasibatliq",
          },
          {
            label: "Vergi Audit ",
            to: "/vergiaudit",
          },
          {
            label: "Gömrük rəsmiləşdirilməsi və Broker xidmətləri",
            to: "/gomrukresmilesdirilmesivebrokerhidmetleri",
          },
          {
            label: "Dizayn Xidmətləri",
            to: "/dizaynhidmetleri",
          },
        ],
      },
      {
        label: "EH Trade",
        to: "/ehtrade",
        children: [
          {
            label: "Toz boya məhsullar",
            to: "/tozboya məhsullar",
          },
          {
            label: "Zımpara və Sumpata kağızı ",
            to: "/zımparavəsumpatakağızı",
          },
          {
            label: "Boya ruloları və fırçaları",
            to: "/boyarulolarıvəfırçaları",
          },
          {
            label: "Xırdavatlar",
            to: "/xırdavatlar",
          },
        ],
      },
    ],
  },
  {
    label: "Əlaqə",
    to: "/contact",
  },
];

export default menus;