import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Agriculture or Aggriculture - Which is Correct? | Word Finder",
  description: "Learn the correct spelling between &quot;agriculture&quot; and &quot;aggriculture&quot;. Discover definitions, usage examples, and common mistakes to avoid.",
};

export default function AgricultureVsAggriculturePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Agriculture or Aggriculture</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;agriculture&quot; and &quot;aggriculture&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Aggriculture</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Aggriculture&quot; is a common misspelling. The correct spelling is &quot;agriculture&quot; with a single &apos;g&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Agriculture</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Agriculture&quot; is the correct spelling. It refers to the science, art, and business of cultivating soil, producing crops, and raising livestock.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Agriculture</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Agriculture</strong> (noun): The science, art, and business of cultivating soil, producing crops, and raising livestock; farming.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• <strong>Agriculture</strong> is vital to the world&apos;s food supply.</li>
              <li>• Advances in <strong>agriculture</strong> have increased crop yields.</li>
              <li>• Many people in rural areas work in <strong>agriculture</strong>.</li>
              <li>• The government supports <strong>agriculture</strong> through subsidies.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Agriculture</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Farming</li>
                <li>• Cultivation</li>
                <li>• Husbandry</li>
                <li>• Agronomy</li>
                <li>• Tillage</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Horticulture</li>
                <li>• Silviculture</li>
                <li>• Animal husbandry</li>
                <li>• Crop science</li>
                <li>• Agrotechnology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Agriculture</strong> is spelled with a single &apos;g&apos;, not &quot;aggriculture&quot;.</li>
            <li>• Commonly used in scientific, business, and everyday contexts.</li>
            <li>• Refers to all activities related to farming and food production.</li>
            <li>• The word comes from Latin &quot;agri&quot; (field) and &quot;cultura&quot; (cultivation).</li>
            <li>• The adjective form is &quot;agricultural&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;aggriculture&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;aggriculture&quot; is never correct. The proper spelling is always &quot;agriculture&quot; with a single &apos;g&apos;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;agriculture&quot; has only one &apos;g&apos;, just like &quot;agile&quot; and &quot;agitate&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between agriculture and horticulture?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Agriculture&quot; is broader, covering all farming, while &quot;horticulture&quot; focuses on garden crops and plants.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can agriculture be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;agriculture&quot; is appropriate in both formal and informal writing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;aggriculture&quot; happens because the double &apos;g&apos; is sometimes mistakenly added, perhaps by analogy with other words.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Agriculture</strong> is the correct spelling with a single &apos;g&apos;. It refers to the science, art, and business of cultivating soil, producing crops, and raising livestock. The misspelling &quot;aggriculture&quot; is never correct. Use this word when talking about farming, food production, or rural industries.</p>
      </div>
    </div>
  );
} 