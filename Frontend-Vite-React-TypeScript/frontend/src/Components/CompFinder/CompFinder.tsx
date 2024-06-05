import React, { useEffect, useState } from "react";
import { CompanyCompData } from "../../company";
import { getCompData } from "../../api";
import CompFinderItem from "./CompFinderItem/CompFinderItem";
import Spinner from "../Spinner/Spinner";

type Props = {
  ticker: string;
};

const CompFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyCompData>();
  useEffect(() => {
    const fetchCompData = async () => {
      const result = await getCompData(ticker);
      setCompanyData(result?.data[0]);
    };
    fetchCompData();
  }, [ticker]);
  return (
    <>
      <div className="inline-flex rounded-md shadow-sm m-4" role="group">
        {companyData ? (
          companyData?.peersList.map((ticker) => {
            return <CompFinderItem ticker={ticker} />;
          })
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default CompFinder;
