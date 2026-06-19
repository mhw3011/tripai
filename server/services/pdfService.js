import axios from "axios";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

export const extractTextFromPDF = async (pdfUrl) => {
  const response = await axios.get(pdfUrl, {
    responseType: "arraybuffer",
  });

  const data = new Uint8Array(response.data);

  const pdf = await pdfjsLib.getDocument({
    data,
    useSystemFonts: true,
  }).promise;

  let text = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);

    const content = await page.getTextContent();

    const pageText = content.items.map((item) => item.str).join(" ");

    text += pageText + "\n";
  }

  return text;
};
