export async function generateMetadata({ params }) {
  const { name } = params;
  const [firstName, lastName] = name.toLowerCase().split("_");
  return {
    title: `Vote for ${firstName} - IEC&A Nominees`,
    description: `Cast your vote for ${firstName} at Influence Exchange Confex and Awards`,
    openGraph: {
      title: `Vote for ${firstName}`,
      description: `Support ${firstName} at Influence Exchange Confex and Awards`,
      images: [
        {
          url: "https://india.theiena.com/openg.jpg",
          alt: `Vote for ${firstName}`,
        },
      ],
    },
  };
}

export default function VoteLayout({ children }) {
  return <div className="vote-layout">{children}</div>;
}
