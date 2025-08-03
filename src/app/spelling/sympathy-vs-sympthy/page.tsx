import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sympathy vs Sympthy - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;sympathy&quot; vs &quot;sympthy&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SympathyVsSympthyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Sympathy vs Sympthy</h1>
        <p className="text-xl text-gray-600">Word Definitions & Spelling Guide</p>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-indigo-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Word Definitions & Spelling Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;sympathy&quot; and &quot;sympthy&quot;. Learn word definitions, usage examples, and proper spelling patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Sympthy</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Sympthy&quot; is not a standard English word. The correct spelling is &quot;sympathy.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Sympathy</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Sympathy&quot; is the correct spelling. It means &quot;understanding and compassion&quot; or &quot;shared feeling.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Sympathy (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Feelings of pity and sorrow for someone else&apos;s misfortune; understanding and compassion; agreement or harmony between people.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She expressed <strong>sympathy</strong> for the family.</li>
                  <li>• I have <strong>sympathy</strong> for your situation.</li>
                  <li>• The community showed great <strong>sympathy</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Sympthy (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Sympthy&quot; is not a standard English word and has no recognized meaning.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Sympthy&quot; is not used in standard English.</li>
                  <li>• Always use <strong>sympathy</strong> when referring to compassion or understanding.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Sympathy:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Compassion</li>
                <li>• Empathy</li>
                <li>• Pity</li>
                <li>• Understanding</li>
                <li>• Concern</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Sympthy:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Spelling Rules:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Sympathy</strong> is spelled with &quot;th&quot;: s-y-m-p-a-t-h-y.</li>
            <li>• The word comes from Greek &quot;sympatheia&quot; meaning &quot;fellow feeling.&quot;</li>
            <li>• &quot;Sympthy&quot; is not a recognized English word.</li>
            <li>• Remember: sympathy has &quot;th&quot; like &quot;path&quot; and &quot;bath.&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;sympathy&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Sympathy&quot; is a noun that refers to feelings of compassion or understanding. It follows standard English grammar patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;sympathy&quot; differ from &quot;empathy&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Sympathy&quot; is feeling compassion for someone&apos;s situation, while &quot;empathy&quot; is understanding and sharing someone&apos;s feelings.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;sympathy&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Sympathy&quot; is a noun that refers to feelings of compassion, understanding, or agreement.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;sympathy&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;sympathy&quot; is perfectly acceptable in formal writing, academic papers, and professional communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;sympathy&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Sympathy&quot; comes from Greek &quot;sympatheia&quot; meaning &quot;fellow feeling&quot; and entered English through Latin &quot;sympathia.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;sympathy&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Sympathy&quot; can be used as a subject (&quot;Sympathy is important&quot;), object (&quot;Show sympathy&quot;), or in compound forms (&quot;sympathy card&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;sympathy&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: sympathy card, sympathy for, sympathy with, express sympathy, and sympathy strike.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;sympathy&quot; and &quot;sympthy&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;sympathy&quot; has &quot;th&quot; (like &quot;path&quot; and &quot;bath&quot;), and emphasize that &quot;sympthy&quot; is not a real word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;sympathy&quot; used in psychological contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;sympathy&quot; is commonly used in psychology, counseling, and social work to describe emotional responses to others&apos; situations.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different meanings of &quot;sympathy&quot; in various contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Sympathy&quot; can mean compassion for suffering (sympathy for loss), agreement (sympathy with goals), or harmony (sympathy between people).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling of &quot;sympathy&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of &quot;sympathy&quot; as having &quot;th&quot; like other words: path, bath, math, with. The &quot;th&quot; sound is represented by &quot;th&quot; not &quot;t.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common misspellings of &quot;sympathy&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common misspellings include: sympthy, sympthy, sympthy, sympthy, and sympthy. The correct spelling always has &quot;th&quot; in the middle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;sympathy&quot; used in social contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In social contexts, &quot;sympathy&quot; refers to showing compassion and understanding toward others during difficult times.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is the difference between sympathy and pity?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Sympathy&quot; involves understanding and compassion, while &quot;pity&quot; often implies feeling sorry for someone from a position of superiority.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell &quot;sympathy&quot; with &quot;t&quot; instead of &quot;th&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: People often confuse &quot;t&quot; and &quot;th&quot; because they may not pronounce the &quot;h&quot; clearly, but &quot;sympathy&quot; specifically has &quot;th&quot; like &quot;path.&quot;</p>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
        <h2 className="text-2xl font-bold mb-4 text-indigo-900">Word Definitions Summary</h2>
        <p className="text-lg md:text-xl text-indigo-800 leading-relaxed">Word Definition Rule: <strong>Sympathy</strong> is the correct spelling with &quot;th&quot;: s-y-m-p-a-t-h-y. &quot;Sympathy&quot; is a word of Greek origin meaning feelings of pity and sorrow for someone else&apos;s misfortune or understanding and compassion. The incorrect spelling &quot;sympthy&quot; is not a recognized English word and should never be used. Always use &quot;sympathy&quot; when referring to compassion, understanding, or shared feelings.</p>
      </div>
    </div>
  )
} 