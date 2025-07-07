import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Alcohol vs Alchohol - Which is Correct? | Word Finder",
  description: "Learn the correct spelling between &quot;alcohol&quot; and &quot;alchohol&quot;. Discover definitions, usage examples, and common mistakes to avoid.",
};

export default function AlcoholVsAlchoholPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Alcohol vs Alchohol</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;alcohol&quot; and &quot;alchohol&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
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
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Alcohol</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Alcohol</strong> (noun): A colorless volatile flammable liquid which is the intoxicating constituent of wine, beer, spirits, and other drinks, and is also used as an industrial solvent and as fuel.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• Excessive <strong>alcohol</strong> consumption can be harmful to health.</li>
              <li>• The drink contains a high percentage of <strong>alcohol</strong>.</li>
              <li>• <strong>Alcohol</strong> is not permitted on school premises.</li>
              <li>• The laboratory uses <strong>alcohol</strong> as a solvent.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Alcohol</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Liquor</li>
                <li>• Spirits</li>
                <li>• Booze</li>
                <li>• Ethanol</li>
                <li>• Drink</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Beer</li>
                <li>• Wine</li>
                <li>• Whiskey</li>
                <li>• Vodka</li>
                <li>• Brandy</li>
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
            <li>• <strong>Alcohol</strong> is spelled without an &apos;h&apos; after the &apos;c&apos;.</li>
            <li>• Used to refer to both the chemical and beverages containing it.</li>
            <li>• Commonly used in medical, scientific, and social contexts.</li>
            <li>• The adjective form is &quot;alcoholic&quot;.</li>
            <li>• The plural is &quot;alcohols&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;alchohol&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;alchohol&quot; is never correct. The proper spelling is always &quot;alcohol&quot; without an &apos;h&apos; after the &apos;c&apos;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;alcohol&quot; has the &apos;h&apos; after the &apos;o&apos;, not after the &apos;c&apos;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;alcohol&quot; refer to non-drinkable substances?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;alcohol&quot; can refer to any organic compound with a hydroxyl group, not just beverages.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;alcohol&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: alcohol abuse, alcohol content, alcohol poisoning, alcohol-free.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;alchohol&quot; happens because the &apos;h&apos; is mistakenly placed after the &apos;c&apos; instead of after the &apos;o&apos;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Alcohol</strong> is the correct spelling without an &apos;h&apos; after the &apos;c&apos;. It refers to the intoxicating ingredient in drinks and a class of chemical compounds. The misspelling &quot;alchohol&quot; is never correct. Use &quot;alcohol&quot; in both scientific and everyday contexts.</p>
      </div>
    </div>
  );
} 