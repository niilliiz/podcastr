export default function PodcastDetail({
  params,
}: {
  params: { podcastId: string };
}) {
  return <p className="text-white-1">podcast detail for {params.podcastId}</p>;
}
