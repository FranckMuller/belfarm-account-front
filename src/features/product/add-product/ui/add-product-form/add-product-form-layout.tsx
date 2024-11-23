import { FC } from "react";

type Props = {
  infoProductFields: React.ReactNode;
  descriptionProductFields: React.ReactNode;
  priceProductFields: React.ReactNode;
  photoProductFields: React.ReactNode;
  button: React.ReactNode;
};

export const AddProductFormLayout: FC<Props> = ({
  infoProductFields,
  descriptionProductFields,
  priceProductFields,
  photoProductFields,
  button,
}) => {
  return (
    <>
      <div className="flex flex-col xl:flex-row gap-5">
        <div className="flex flex-col flex-1 bg-white shadow">
          <h3 className="p-3 -mb-px lg:p-4 rounded-tl-md rounded-tr-md text-sm">
            Информация о продукте
          </h3>
          <div className="px-3 pt-3 pb-4 lg:px-5 lg:pt-5 lg:pb-6 flex flex-col gap-5 flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-5">
              {infoProductFields}
            </div>

            <div className="flex flex-col lg:flex-row flex-1 gap-5">
              {descriptionProductFields}
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white shadow">
          <h3 className="p-3 lg:p-4 -mb-px rounded-tl-md rounded-tr-md text-sm">
            Информация о цене
          </h3>
          <div className="grid grid-rows-4 lg:grid-rows-2 lg:grid-cols-2 xl:grid-rows-4 xl:grid-cols-1 gap-5 px-5 pt-5 pb-6 flex-1">
            {priceProductFields}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 px-5 pt-5 pb-6 bg-white shadow">
        {photoProductFields}
      </div>

      <div className="flex justify-start">{button}</div>
    </>
  );
};
