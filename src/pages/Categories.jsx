import { GenreCard } from "../components/GenreCard";

export const Categories = ({ sedGnre }) => {
  return (
    <>
      <div className="w-full h-full bg-[#1A1A1A]">
        <div className="w-full pl-6 pt-6">
          <h1 className="text-4xl text-white font-semibold">Generi</h1>
        </div>
        <GenreCard sedGnre={sedGnre} />
      </div>
    </>
  );
};
