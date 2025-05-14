import React from "react";
import Link from "next/link";
import { linkBuilders } from "@/utils/helpers";

function Table({ headItems, data, keys, customComponent = null }) {
  return (
    <div className="relative overflow-x-auto h-[70vh] mb-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-blue-400">
          <tr>
            {headItems.map((item) => (
              <th scope="col" className="px-6 py-3 font-bold" key={item.id}>
                {item.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length ? (
            data.map((item, index) => (
              <tr
                className={`border-b ${
                  index % 2 === 0 ? "bg-blue-100" : "bg-blue-200"
                } border-gray-200`}
                key={index}
              >
                {keys.map((key) => {
                  const content = Array.isArray(key.name)
                    ? key.name.map((singleKey) => item[singleKey]).join(", ")
                    : item[key.name];

                  const cellContent = key.hasCustomComponent ? (
                    customComponent ? (
                      React.createElement(customComponent, {
                        title: item.ADI,
                        modalContent: item.ACIKLAMA,
                      })
                    ) : null
                  ) : key.linkBuilder ? (
                    <Link
                      href={`${linkBuilders[key.linkBuilder](item)}`}
                      target="_blank"
                      className="text-blue-700 hover:underline"
                    >
                      {key.linkBuilder ? key.staticName : content}
                    </Link>
                  ) : typeof content === "boolean" ? (
                    content === true ? (
                      "Var"
                    ) : (
                      "Yok"
                    )
                  ) : (
                    content
                  );

                  return (
                    <th
                      scope="row"
                      className="p-4 text-gray-900 whitespace-nowrap font-semibold"
                      key={key.id}
                    >
                      {cellContent}
                    </th>
                  );
                })}
              </tr>
            ))
          ) : (
            <tr>
              <th>
                <p>Herhangi bir veri bulunamadi</p>
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
