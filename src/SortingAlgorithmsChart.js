import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SortingAlgorithmsChart = () => {
  const convertToSeconds = (time) => {
    if (time.includes("min")) {
      return parseFloat(time.replace(" min", "")) * 60;
    } else if (time.includes("seg")) {
      return parseFloat(time.replace(" seg", ""));
    }
    return parseFloat(time);
  };

  const lentosData = [
    {
      size: "500K",
      insertionSort: {
        ordered: convertToSeconds("0.001 seg"),
        inverted: convertToSeconds("4.6 min"),
        random: convertToSeconds("2.15 min"),
      },
      bubbleSort: {
        ordered: convertToSeconds("41 min"),
        inverted: convertToSeconds("7.71 min"),
        random: convertToSeconds("11 min"),
      },
      selectionSort: {
        ordered: convertToSeconds("41 min"),
        inverted: convertToSeconds("7.51 min"),
        random: convertToSeconds("4.8 min"),
      },
    },
    {
      size: "750K",
      insertionSort: {
        ordered: convertToSeconds("0.002 seg"),
        inverted: convertToSeconds("10.1 min"),
        random: convertToSeconds("5.75 min"),
      },
      bubbleSort: {
        ordered: convertToSeconds("9.8 min"),
        inverted: convertToSeconds("18.5 min"),
        random: convertToSeconds("16.5 min"),
      },
      selectionSort: {
        ordered: convertToSeconds("9.1 min"),
        inverted: convertToSeconds("17.5 min"),
        random: convertToSeconds("18.25 min"),
      },
    },
    {
      size: "1KK",
      insertionSort: {
        ordered: convertToSeconds("0.003 seg"),
        inverted: convertToSeconds("18.95 min"),
        random: convertToSeconds("12.2 min"),
      },
      bubbleSort: {
        ordered: convertToSeconds("17.5 min"),
        inverted: convertToSeconds("32.26 min"),
        random: convertToSeconds("23.4 min"),
      },
      selectionSort: {
        ordered: convertToSeconds("16.6 min"),
        inverted: convertToSeconds("30.24 min"),
        random: convertToSeconds("20.4 min"),
      },
    },
    {
      size: "5KK",
      insertionSort: {
        ordered: convertToSeconds("0.013 seg"),
        inverted: convertToSeconds("94.75 min"),
        random: convertToSeconds("61 min"),
      },
      bubbleSort: {
        ordered: convertToSeconds("87.5 min"),
        inverted: convertToSeconds("161.3 min"),
        random: convertToSeconds("116 min"),
      },
      selectionSort: {
        ordered: convertToSeconds("83 min"),
        inverted: convertToSeconds("151.2 min"),
        random: convertToSeconds("102 min"),
      },
    },
  ];

  const rapidosData = [
    {
      size: "5KK",
      quickSort: {
        ordered: convertToSeconds("0.14 seg"),
        inverted: convertToSeconds("0.15 seg"),
        random: convertToSeconds("0.40 seg"),
      },
      mergeSort: {
        ordered: convertToSeconds("1.13 seg"),
        inverted: convertToSeconds("1.26 seg"),
        random: convertToSeconds("1.65 seg"),
      },
      shellSort: {
        ordered: convertToSeconds("0.28 seg"),
        inverted: convertToSeconds("0.29 seg"),
        random: convertToSeconds("0.28 seg"),
      },
      heapSort: {
        ordered: convertToSeconds("0.92 seg"),
        inverted: convertToSeconds("0.90 seg"),
        random: convertToSeconds("1.55 seg"),
      },
      radixSort: {
        ordered: convertToSeconds("0.61 seg"),
        inverted: convertToSeconds("0.63 seg"),
        random: convertToSeconds("0.25 seg"),
      },
    },
    {
      size: "7.5KK",
      quickSort: {
        ordered: convertToSeconds("0.23 seg"),
        inverted: convertToSeconds("0.26 seg"),
        random: convertToSeconds("0.61 seg"),
      },
      mergeSort: {
        ordered: convertToSeconds("1.80 seg"),
        inverted: convertToSeconds("1.95 seg"),
        random: convertToSeconds("2.51 seg"),
      },
      shellSort: {
        ordered: convertToSeconds("0.44 seg"),
        inverted: convertToSeconds("0.44 seg"),
        random: convertToSeconds("0.43 seg"),
      },
      heapSort: {
        ordered: convertToSeconds("1.43 seg"),
        inverted: convertToSeconds("1.43 seg"),
        random: convertToSeconds("2.59 seg"),
      },
      radixSort: {
        ordered: convertToSeconds("0.94 seg"),
        inverted: convertToSeconds("0.94 seg"),
        random: convertToSeconds("0.39 seg"),
      },
    },
    {
      size: "10KK",
      quickSort: {
        ordered: convertToSeconds("0.34 seg"),
        inverted: convertToSeconds("0.34 seg"),
        random: convertToSeconds("1.043 seg"),
      },
      mergeSort: {
        ordered: convertToSeconds("2.5 seg"),
        inverted: convertToSeconds("2.60 seg"),
        random: convertToSeconds("2.37 seg"),
      },
      shellSort: {
        ordered: convertToSeconds("0.58 seg"),
        inverted: convertToSeconds("0.63 seg"),
        random: convertToSeconds("0.62 seg"),
      },
      heapSort: {
        ordered: convertToSeconds("1.97 seg"),
        inverted: convertToSeconds("1.94 seg"),
        random: convertToSeconds("3.59 seg"),
      },
      radixSort: {
        ordered: convertToSeconds("1.45 seg"),
        inverted: convertToSeconds("1.45 seg"),
        random: convertToSeconds("0.51 seg"),
      },
    },
    {
      size: "15KK",
      quickSort: {
        ordered: convertToSeconds("0.51 seg"),
        inverted: convertToSeconds("1.02 seg"),
        random: convertToSeconds("1.57 seg"),
      },

      mergeSort: {
        ordered: convertToSeconds("3.71 seg"),
        inverted: convertToSeconds("3.67 seg"),
        random: convertToSeconds("3.77 seg"),
      },
      shellSort: {
        ordered: convertToSeconds("0.94 seg"),
        inverted: convertToSeconds("0.89 seg"),
        random: convertToSeconds("0.93 seg"),
      },
      heapSort: {
        ordered: convertToSeconds("2.97 seg"),
        inverted: convertToSeconds("2.96 seg"),
        random: convertToSeconds("5.44 seg"),
      },
      radixSort: {
        ordered: convertToSeconds("2.17 seg"),
        inverted: convertToSeconds("2.17 seg"),
        random: convertToSeconds("0.96 seg"),
      },
    },
  ];

  const [tipo, setTipo] = useState("rapidos");
  const [escala, setEscala] = useState("log");
  const [ordem, setOrdem] = useState("ordered");

  const processData = (data, tipo) => {
    return data.map((item) => {
      const newItem = { size: item.size };
      if (tipo === "rapidos") {
        Object.keys(item).forEach((key) => {
          if (key !== "size" && typeof item[key] === "object") {
            newItem[key] = item[key][ordem];
          }
        });
      } else {
        Object.keys(item).forEach((key) => {
          if (key !== "size" && typeof item[key] === "object") {
            newItem[key] = item[key][ordem];
          }
        });
      }
      return newItem;
    });
  };

  return (
    <div className="p-4">
      <div className="mb-4 space-x-4">
        <select
          className="border p-2 rounded"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="rapidos">Algoritmos Rápidos</option>
          <option value="lentos">Algoritmos Lentos</option>
        </select>

        <select
          className="border p-2 rounded"
          value={escala}
          onChange={(e) => setEscala(e.target.value)}
        >
          <option value="linear">Escala Linear</option>
          <option value="log">Escala Logarítmica</option>
        </select>

        <select
          className="border p-2 rounded"
          value={ordem}
          onChange={(e) => setOrdem(e.target.value)}
        >
          <option value="ordered">Ordenado</option>
          <option value="inverted">Invertido</option>
          <option value="random">Aleatório</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          data={processData(
            tipo === "rapidos" ? rapidosData : lentosData,
            tipo
          )}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="size" />
          <YAxis
            scale={escala === "log" ? "log" : "linear"}
            domain={escala === "log" ? ["auto", "auto"] : [0, "auto"]}
            tickFormatter={(value) => {
              if (value < 60) {
                return `${value.toFixed(2)}s`;
              } else {
                return `${(value / 60).toFixed(2)}min`;
              }
            }}
          />
          <Tooltip
            formatter={(value) => {
              if (value < 60) {
                return [`${value.toFixed(2)} segundos`];
              } else {
                return [`${(value / 60).toFixed(2)} minutos`];
              }
            }}
          />
          <Legend />

          {tipo === "rapidos" && (
            <>
              <Line
                type="monotone"
                dataKey="quickSort"
                stroke="#1244d8"
                name="Quick Sort"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="mergeSort"
                stroke="#82ca9d"
                name="Merge Sort"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="shellSort"
                stroke="#ffc658"
                name="Shell Sort"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="heapSort"
                stroke="#ff9800"
                name="Heap Sort"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="radixSort"
                stroke="#673ab7"
                name="Radix Sort"
                strokeWidth={2}
              />
            </>
          )}

          {tipo === "lentos" && (
            <>
              <Line
                type="monotone"
                dataKey="insertionSort"
                stroke="#ff7300"
                name="Insertion Sort"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="bubbleSort"
                stroke="#e91e63"
                name="Bubble Sort"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="selectionSort"
                stroke="#009688"
                name="Selection Sort"
                strokeWidth={2}
              />
            </>
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SortingAlgorithmsChart;
