import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Adolescent or Adolecent - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;adolescent&quot; and &quot;adolecent&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AdolescentVsAdolecentPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Adolescent or Adolecent
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Adolescent&quot; or &quot;Adolecent&quot;: these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Adolecent</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Adolecent&quot; is a misspelling. The correct spelling has an &apos;s&apos; in &quot;adolescent.&quot;
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Adolescent</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Adolescent&quot; is the correct spelling. It refers to a young person in the process of developing from a child into an adult.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Adolescent</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Adolescent</strong> (noun/adjective): A young person who is developing from a child into an adult; relating to or characteristic of adolescence.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The <strong>adolescent</strong> years can be challenging for many families.</li>
              <li>• She works at a clinic for <strong>adolescent</strong> health.</li>
              <li>• As an <strong>adolescent</strong>, he was very interested in music.</li>
              <li>• The program is designed for <strong>adolescent</strong> development.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Adolescent</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Teenager</li>
                <li>• Youth</li>
                <li>• Juvenile</li>
                <li>• Minor</li>
                <li>• Youngster</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Pubescent</li>
                <li>• Preteen</li>
                <li>• Young adult</li>
                <li>• School-age</li>
                <li>• Teen</li>
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
            <li>• <strong>Adolescent</strong> is spelled with an &apos;s&apos; before the &apos;c&apos;.</li>
            <li>• It&apos;s commonly used in medical, psychological, and educational contexts.</li>
            <li>• Refers to the period of life between childhood and adulthood.</li>
            <li>• The word can be used as both a noun and an adjective.</li>
            <li>• The word comes from the Latin &quot;adolescens&quot; meaning &quot;growing up.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;adolecent&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;adolecent&quot; is never correct. The proper spelling is always &quot;adolescent&quot; with an &apos;s&apos; before the &apos;c&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Remember that &quot;adolescent&quot; has an &apos;s&apos; before the &apos;c&apos; - &quot;adoles-cent&quot;. The word comes from Latin &quot;adolescens&quot; meaning &quot;growing up.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between adolescent and teenager?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Both refer to young people, but &quot;adolescent&quot; is a broader term that includes the entire period of development from childhood to adulthood, while &quot;teenager&quot; specifically refers to ages 13-19.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can adolescent be used as an adjective?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;adolescent&quot; can be used as both a noun (a young person) and an adjective (relating to adolescence).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is adolescent always about negative behavior?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;adolescent&quot; simply refers to the age group and is not inherently negative. It can describe both positive and negative behaviors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;adolecent&quot; likely occurs because the &apos;s&apos; sound is subtle and may be omitted in writing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;adolescent&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: adolescent health, adolescent development, adolescent years, adolescent psychology, and adolescent behavior.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;adolescent&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;adolescent&quot; is appropriate in formal writing, especially in medical, academic, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Adolescent</strong> is the correct spelling with an &apos;s&apos; before the &apos;c&apos;. It refers to a young person in the process of developing from a child into an adult. The misspelling &quot;adolecent&quot; without the &apos;s&apos; is never correct. Use this word when you want to describe someone in the period of adolescence.
        </p>
      </div>
    </div>
  )
} 