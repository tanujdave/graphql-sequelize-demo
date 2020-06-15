import { Chef } from "#root/db/models";

const chefsReolver = () => {
  return Chef.findAll();
};

export default chefsReolver;
