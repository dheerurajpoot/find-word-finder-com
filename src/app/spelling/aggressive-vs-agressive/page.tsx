import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Aggressive vs Agressive - Which is Correct? | Word Finder",
  description: "Learn the correct spelling between &quot;aggressive&quot; and &quot;agressive&quot;. Discover definitions, usage examples, and common mistakes to avoid.",
};

export default function AggressiveVsAgressivePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Aggressive vs Agressive
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Aggressive or Agressive these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Agressive</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Agressive&quot; is a misspelling. The correct spelling has two &apos;g&apos;s.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Aggressive</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Aggressive&quot; is the correct spelling. It means ready to attack or confront.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Aggressive</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Aggressive</strong> (adjective): Ready or likely to attack or confront; characterized by or tending toward unprovoked offensives, attacks, invasions, or the like; vigorously energetic, especially in the use of initiative and forcefulness.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The dog became <strong>aggressive</strong> when strangers approached.</li>
              <li>• He took an <strong>aggressive</strong> approach to the problem.</li>
              <li>• The company launched an <strong>aggressive</strong> marketing campaign.</li>
              <li>• Her <strong>aggressive</strong> behavior was concerning.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Aggressive</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Hostile</li>
                <li>• Belligerent</li>
                <li>• Combative</li>
                <li>• Assertive</li>
                <li>• Forceful</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Confrontational</li>
                <li>• Intense</li>
                <li>• Dynamic</li>
                <li>• Energetic</li>
                <li>• Proactive</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Notes */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Aggressive</strong> is spelled with two &apos;g&apos;s, not one.</li>
            <li>• It&apos;s commonly used in both negative and positive contexts.</li>
            <li>• Can describe behavior, attitudes, or strategies.</li>
            <li>• Often used in business, sports, and psychology contexts.</li>
            <li>• The word comes from the Latin &quot;aggressus&quot; meaning &quot;attacked.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;agressive&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;agressive&quot; is never correct. The proper spelling is always &quot;aggressive&quot; with two &apos;g&apos;s.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;aggressive&quot; as being related to &quot;aggression&quot; - both have two &apos;g&apos;s and relate to attacking or confronting. The word means ready to attack, so it follows the same pattern.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;aggressive&quot; and &quot;assertive&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Aggressive&quot; suggests hostility or readiness to attack, while &quot;assertive&quot; suggests confidence and self-assurance without hostility. &quot;Aggressive&quot; can be negative, while &quot;assertive&quot; is generally positive.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;aggressive&quot; be used in positive contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Aggressive&quot; can be positive when describing energetic, proactive behavior. For example: &quot;The company took an aggressive approach to innovation&quot; or &quot;She was aggressive in pursuing her goals.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;aggressive&quot; related to &quot;aggression&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Aggressive&quot; is the adjective form, while &quot;aggression&quot; is the noun form. Both words share the same root and correct spelling pattern with two &apos;g&apos;s.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;agressive&quot; likely occurs because people may not hear the double &apos;g&apos; sound clearly in pronunciation, or they might think it follows a simpler spelling pattern with one &apos;g&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;aggressive&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: aggressive behavior, aggressive marketing, aggressive approach, aggressive stance, aggressive treatment, and aggressive driving. The word is often used in contexts involving confrontation or energy.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;aggressive&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;aggressive&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, medical, and professional contexts to describe behavior or approaches.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Aggressive</strong> is the correct spelling with two &apos;g&apos;s. It means ready to attack or confront, or characterized by vigorous energy and forcefulness. The misspelling &quot;agressive&quot; with one &apos;g&apos; is never correct. Use this word when you want to describe behavior that is hostile, confrontational, or energetically proactive.
        </p>
      </div>
    </div>
  );
} 