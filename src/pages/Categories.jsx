import { GenreCard } from "../components/GenreCard";

export const Categories = () => {
  return (
    <>
      <div className="w-full min-h-full bg-[#1F1F1F]">
        <div className="w-full pl-6 pt-6">
          <h1 className="text-4xl text-white font-semibold">Generi</h1>
        </div>
        <GenreCard  />
      </div>
    </>
  );
};
