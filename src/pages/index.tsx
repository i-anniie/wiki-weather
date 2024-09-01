
import { SearchBar, SuggestionSection } from "@/components/common";
import PublicLayout from "@/layouts";

export default function Home() {

  return (
    <PublicLayout>
      <section className="main-container h-full w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-2 w-full">
        <SearchBar />
        <SuggestionSection />
      </div>
    </section>
    </PublicLayout>
  );
}
