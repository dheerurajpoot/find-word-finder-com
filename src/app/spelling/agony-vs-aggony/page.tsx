import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Agony or Aggony - Which is Correct? | Word Finder",
  description: "Learn the correct spelling between &quot;agony&quot; and &quot;aggony&quot;. Discover definitions, usage examples, and common mistakes to avoid.",
};

export default function AgonyVsAggonyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Agony or Aggony</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;agony&quot; and &quot;aggony&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Aggony</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Aggony&quot; is a common misspelling. The correct spelling is &quot;agony&quot; with a single &apos;g&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Agony</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Agony&quot; is the correct spelling. It means extreme physical or mental suffering.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Agony</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Agony</strong> (noun): Extreme physical or mental suffering; intense pain or distress.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• He was in <strong>agony</strong> after breaking his leg.</li>
              <li>• The wait for the results was pure <strong>agony</strong>.</li>
              <li>• She endured the <strong>agony</strong> of losing a loved one.</li>
              <li>• The patient screamed in <strong>agony</strong>.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Agony</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Pain</li>
                <li>• Anguish</li>
                <li>• Torment</li>
                <li>• Suffering</li>
                <li>• Misery</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Distress</li>
                <li>• Affliction</li>
                <li>• Woe</li>
                <li>• Despair</li>
                <li>• Torture</li>
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
            <li>• <strong>Agony</strong> is spelled with a single &apos;g&apos;, not &quot;aggony&quot;.</li>
            <li>• Used to describe both physical and emotional pain.</li>
            <li>• Commonly used in medical, literary, and everyday contexts.</li>
            <li>• The adjective form is &quot;agonizing&quot;.</li>
            <li>• The plural is &quot;agonies&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;aggony&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;aggony&quot; is never correct. The proper spelling is always &quot;agony&quot; with a single &apos;g&apos;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;agony&quot; has only one &apos;g&apos;, just like &quot;alone&quot; or &quot;only&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;agony&quot; refer to emotional pain?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;agony&quot; can refer to both physical and emotional pain or suffering.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;agony&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: agony of defeat, agony of waiting, in agony, agony and ecstasy.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;aggony&quot; happens because the double &apos;g&apos; is sometimes mistakenly added, perhaps by analogy with other words.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Agony</strong> is the correct spelling with a single &apos;g&apos;. It means extreme physical or mental suffering. The misspelling &quot;aggony&quot; is never correct. Use &quot;agony&quot; to describe intense pain or distress.</p>
      </div>
    </div>
  );
} 