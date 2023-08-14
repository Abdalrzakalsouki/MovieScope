import { useNavigate, createSearchParams } from "react-router-dom";
import { MoviesResponse } from "../Interfaces/interface";

const useQueryParams = (params: MoviesResponse, path: string) => {
  const navigate = useNavigate();
  const goToView = () => {
    const strParams = JSON.stringify(params);
    const newParams = createSearchParams(strParams);
    navigate({ pathname: path, search: `?${newParams}` });
  };

  return goToView;
};

export default useQueryParams;
