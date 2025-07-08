import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Alcohol or Alchohol - Which is Correct? | Word Finder",
  description: "Learn the correct spelling between &quot;alcohol&quot; and &quot;alchohol&quot;. Discover definitions, usage examples, and common mistakes to avoid.",
};

export default function AlcoholVsAlchoholPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Alcohol or Alchohol</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;alcohol&quot; or &quot;alchohol&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Alchohol</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Alchohol&quot; is a common misspelling. The correct spelling is &quot;alcohol&quot; with the &apos;h&apos; after the &apos;c&apos; omitted.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Alcohol</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Alcohol&quot; is the correct spelling. It refers to a colorless volatile flammable liquid which is the intoxicating constituent of wine, beer, spirits, and other drinks.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Alcohol (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A colorless volatile flammable liquid (C₂H₅OH), the intoxicating ingredient in drinks such as beer, wine, and spirits; also used as a solvent and in fuel.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The legal drinking age for <strong>alcohol</strong> varies by country.</li>
                  <li>• <strong>Alcohol</strong> can be harmful if consumed in excess.</li>
                  <li>• The solution contains <strong>alcohol</strong> as a solvent.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Alchohol (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Alchohol&quot; is not a standard English word and is considered a misspelling of &quot;alcohol&quot;.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Alchohol&quot; is not used in standard English for &quot;alcohol&quot;.</li>
                  <li>• Always use <strong>alcohol</strong> when referring to the substance.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Alcohol:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Ethanol</li>
                <li>• Spirits</li>
                <li>• Liquor</li>
                <li>• Booze</li>
                <li>• Hard drink</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Alchohol:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word in this context)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Alcohol</strong> is spelled with &apos;c&apos; before the &apos;h&apos;, not &quot;ch&quot;.</li>
            <li>• Used to describe the intoxicating ingredient in drinks and as a solvent.</li>
            <li>• The plural is &quot;alcohols&quot; (for chemical compounds).</li>
            <li>• &quot;Alchohol&quot; is not correct in this context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;alchohol&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;alchohol&quot; is never correct as a spelling for &quot;alcohol&quot;. Always use &quot;alcohol&quot; for the substance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;alcohol&quot; has &apos;c&apos; before the &apos;h&apos;, not &quot;ch&quot; together.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;alcohol&quot; refer to other chemicals?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, in chemistry, &quot;alcohol&quot; refers to a class of compounds, but in everyday use it means the intoxicating drink ingredient.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;alcohol&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: alcohol abuse, alcohol content, alcohol poisoning, alcohol-free.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;alchohol&quot; happens because &apos;ch&apos; is a common English digraph, but in this word, it is just &apos;c&apos; followed by &apos;h&apos;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Alcohol</strong> is the correct spelling with &apos;c&apos; before the &apos;h&apos;. It refers to the intoxicating ingredient in drinks. The misspelling &quot;alchohol&quot; is never correct. Use &quot;alcohol&quot; in scientific, medical, and everyday contexts.</p>
      </div>
    </div>
  );
} 