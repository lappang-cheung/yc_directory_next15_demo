import SearchForm from "@/components/SeachForm";
import StartupCard from "@/components/StartupCard";

const Home = async({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) => {

  const query = (await searchParams).query

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: {
      _id: 1,
      name: 'John Doe'
    },
    _id: 1,
    description: 'This is a description.',
    image: 'https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Robots',
    title: 'We Robots'
  }]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Idea,s Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query}/>
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          { query ? `Search Results for "${query}"` : "All Startups" }
        </p>
        <ul className="mt-7 card_grid">
          {
            posts?.length > 0 ? (
              posts.map((post: StartupCardType) => (
                <StartupCard key={post?._id}
                             post={post}/>
              ))
            ) : (
              <p className="text-20-semibold text-center">
                No startups found.
              </p>
            )}
        </ul>
      </section>
    </>
  )
}

export default Home
