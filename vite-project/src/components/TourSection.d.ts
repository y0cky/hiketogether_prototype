export declare const natur_touren: {
    id: number;
    titel: string;
    bildStill: string;
    bildAnimation: string;
    preis: string;
    gruppenanzahl: string;
}[];
export declare const urban_touren: {
    id: number;
    titel: string;
    bildStill: string;
    bildAnimation: string;
    preis: string;
    gruppenanzahl: string;
}[];
type Props = {
    isUrban: boolean;
    setIsUrban: React.Dispatch<React.SetStateAction<boolean>>;
};
declare function TourenSection({ isUrban, setIsUrban }: Props): import("react/jsx-runtime").JSX.Element;
export default TourenSection;
