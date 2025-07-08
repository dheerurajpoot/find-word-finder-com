import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Agility or Agilty - Which is Correct? | Word Finder",
  description: "Learn the correct spelling between &quot;agility&quot; and &quot;agilty&quot;. Discover definitions, usage examples, and common mistakes to avoid.",
};

export default function AgilityVsAgiltyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Agility or Agilty</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;agility&quot; and &quot;agilty&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Agilty</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Agilty&quot; is a common misspelling. The correct spelling is &quot;agility&quot; with an &apos;i&apos; after the &apos;l&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Agility</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Agility&quot; is the correct spelling. It means the ability to move quickly and easily, or the ability to think and understand quickly.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Agility</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Agility</strong> (noun): The ability to move quickly and easily; nimbleness. Also, the ability to think and understand quickly.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The gymnast demonstrated incredible <strong>agility</strong> on the balance beam.</li>
              <li>• Agility is important for soccer players.</li>
              <li>• The company&apos;s <strong>agility</strong> allowed it to adapt to market changes.</li>
              <li>• Mental <strong>agility</strong> is valued in problem-solving roles.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Agility</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Nimbleness</li>
                <li>• Quickness</li>
                <li>• Dexterity</li>
                <li>• Spryness</li>
                <li>• Liveliness</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Flexibility</li>
                <li>• Coordination</li>
                <li>• Alertness</li>
                <li>• Adaptability</li>
                <li>• Swiftness</li>
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
            <li>• <strong>Agility</strong> is spelled with an &apos;i&apos; after the &apos;l&apos;, not &quot;agilty&quot;.</li>
            <li>• Used to describe both physical and mental quickness.</li>
            <li>• Commonly used in sports, business, and cognitive contexts.</li>
            <li>• The adjective form is &quot;agile&quot;.</li>
            <li>• The plural is &quot;agilities&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;agilty&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;agilty&quot; is never correct. The proper spelling is always &quot;agility&quot; with an &apos;i&apos; after the &apos;l&apos;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;agility&quot; comes from &quot;agile&quot; plus &quot;-ity&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;agility&quot; refer to mental quickness?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;agility&quot; can refer to both physical and mental quickness or adaptability.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;agility&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: agility training, mental agility, business agility, agility ladder.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;agilty&quot; happens because the &apos;i&apos; after the &apos;l&apos; is sometimes forgotten or omitted.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Agility</strong> is the correct spelling with an &apos;i&apos; after the &apos;l&apos;. It means the ability to move or think quickly and easily. The misspelling &quot;agilty&quot; is never correct. Use &quot;agility&quot; in both physical and mental contexts.</p>
      </div>
    </div>
  );
} 