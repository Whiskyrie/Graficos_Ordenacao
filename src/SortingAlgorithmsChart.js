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
  // Converter todos os tempos para segundos para melhor visualização
  const convertToSeconds = (time) => {
    if (time.includes("min")) {
      return parseFloat(time.replace(" min", "")) * 60;
    } else if (time.includes("seg")) {
      return parseFloat(time.replace(" seg", ""));
    }
    return parseFloat(time);
  };

  const data = [
    {
      size: "500K",
      quickSort: convertToSeconds("0.14 seg"),
      mergeSort: convertToSeconds("1.13 seg"),
      shellSort: convertToSeconds("0.022 seg"),
      insertionSort: convertToSeconds("0.001 seg"),
      bubbleSort: convertToSeconds("41 min"),
      selectionSort: convertToSeconds("41 min"),
      type: "Ordenado",
    },
    {
      size: "750K",
      quickSort: convertToSeconds("0.23 seg"),
      mergeSort: convertToSeconds("1.80 seg"),
      shellSort: convertToSeconds("0.034 seg"),
      insertionSort: convertToSeconds("0.002 seg"),
      bubbleSort: convertToSeconds("9.8 min"),
      selectionSort: convertToSeconds("9.1 min"),
      type: "Ordenado",
    },
    {
      size: "1KK",
      quickSort: convertToSeconds("0.34 seg"),
      mergeSort: convertToSeconds("2.5 seg"),
      shellSort: convertToSeconds("0.045 seg"),
      insertionSort: convertToSeconds("0.003 seg"),
      bubbleSort: convertToSeconds("17.5 min"),
      selectionSort: convertToSeconds("16.6 min"),
      type: "Ordenado",
    },
    {
      size: "5KK",
      quickSort: convertToSeconds("0.51 seg"),
      mergeSort: convertToSeconds("3.71 seg"),
      shellSort: convertToSeconds("0.27 seg"),
      insertionSort: convertToSeconds("0.013 seg"),
      bubbleSort: convertToSeconds("87.5 min"),
      selectionSort: convertToSeconds("83 min"),
      type: "Ordenado",
    },
    {
      size: "7.5KK",
      quickSort: convertToSeconds("0.26 seg"),
      mergeSort: convertToSeconds("1.95 seg"),
      shellSort: convertToSeconds("0.052 seg"),
      insertionSort: convertToSeconds("10.1 min"),
      bubbleSort: convertToSeconds("18.5 min"),
      selectionSort: convertToSeconds("17.5 min"),
      type: "Invertido",
    },
    {
      size: "10KK",
      quickSort: convertToSeconds("0.34 seg"),
      mergeSort: convertToSeconds("2.60 seg"),
      shellSort: convertToSeconds("0.069 seg"),
      insertionSort: convertToSeconds("18.95 min"),
      bubbleSort: convertToSeconds("32.26 min"),
      selectionSort: convertToSeconds("30.24 min"),
      type: "Invertido",
    },
    {
      size: "15KK",
      quickSort: convertToSeconds("1.02 seg"),
      mergeSort: convertToSeconds("3.67 seg"),
      shellSort: convertToSeconds("0.393 seg"),
      insertionSort: convertToSeconds("94.75 min"),
      bubbleSort: convertToSeconds("161.3 min"),
      selectionSort: convertToSeconds("151.2 min"),
      type: "Invertido",
    },
  ];

  const [tipo, setTipo] = useState("todos");
  const [escala, setEscala] = useState("log");

  return (
    <div className="p-4">
      <div className="mb-4 space-x-4">
        <select
          className="border p-2 rounded"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="todos">Todos os Algoritmos</option>
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
      </div>

      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          data={data}
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

          {(tipo === "todos" || tipo === "rapidos") && (
            <>
              <Line
                type="monotone"
                dataKey="quickSort"
                stroke="#8884d8"
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
            </>
          )}

          {(tipo === "todos" || tipo === "lentos") && (
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
