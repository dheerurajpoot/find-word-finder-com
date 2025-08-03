import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Syphilis vs Siphilis - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;syphilis&quot; vs &quot;siphilis&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SyphilisVsSiphilisPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Syphilis vs Siphilis</h1>
        <p className="text-xl text-gray-600">Word Definitions & Spelling Guide</p>
      </div>

      <div className="bg-gradient-to-r from-lime-50 to-green-50 p-6 rounded-lg mb-8 border-l-4 border-lime-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Word Definitions & Spelling Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;syphilis&quot; and &quot;siphilis&quot;. Learn word definitions, usage examples, and proper spelling patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Siphilis</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Siphilis&quot; is not a standard English word. The correct spelling is &quot;syphilis.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Syphilis</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Syphilis&quot; is the correct spelling. It refers to a sexually transmitted bacterial infection.</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Syphilis (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A sexually transmitted bacterial infection caused by Treponema pallidum, characterized by distinct stages and various symptoms.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• <strong>Syphilis</strong> is a serious bacterial infection.</li>
                  <li>• Early detection of <strong>syphilis</strong> is important.</li>
                  <li>• <strong>Syphilis</strong> can be treated with antibiotics.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Siphilis (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Siphilis&quot; is not a standard English word and has no recognized meaning.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Siphilis&quot; is not used in standard English.</li>
                  <li>• Always use <strong>syphilis</strong> when referring to the medical condition.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Syphilis:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Lues</li>
                <li>• The pox</li>
                <li>• Treponematosis</li>
                <li>• Venereal disease</li>
                <li>• STI</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Siphilis:</h4>
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
            <li>• <strong>Syphilis</strong> is spelled with &quot;sy&quot;: s-y-p-h-i-l-i-s.</li>
            <li>• The word comes from the name of a character in a 16th-century poem.</li>
            <li>• &quot;Siphilis&quot; is not a recognized English word.</li>
            <li>• Remember: syphilis starts with &quot;sy&quot; like &quot;symphony&quot; and &quot;symbol.&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;syphilis&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Syphilis&quot; is a noun that refers to a medical condition. It follows standard English grammar patterns and is typically used as an uncountable noun.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;syphilis&quot; differ from other STIs?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Syphilis&quot; is a specific bacterial infection caused by Treponema pallidum, distinct from other sexually transmitted infections like gonorrhea or chlamydia.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;syphilis&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Syphilis&quot; is a noun that refers to a specific medical condition or disease.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;syphilis&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;syphilis&quot; is appropriate in formal medical, academic, and professional writing when discussing the condition.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;syphilis&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Syphilis&quot; comes from the name of a character in a 16th-century poem by Girolamo Fracastoro, who wrote about the disease.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;syphilis&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Syphilis&quot; can be used as a subject (&quot;Syphilis is treatable&quot;), object (&quot;Test for syphilis&quot;), or in compound forms (&quot;syphilis testing&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;syphilis&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: syphilis testing, syphilis treatment, congenital syphilis, syphilis screening, and syphilis infection.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;syphilis&quot; and &quot;siphilis&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;syphilis&quot; starts with &quot;sy&quot; (like &quot;symphony&quot; and &quot;symbol&quot;), and emphasize that &quot;siphilis&quot; is not a real word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;syphilis&quot; used in medical contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;syphilis&quot; is a standard medical term used in healthcare, research, and public health contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different stages of syphilis?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Syphilis has distinct stages: primary, secondary, latent, and tertiary, each with different symptoms and characteristics.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling of &quot;syphilis&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of &quot;syphilis&quot; as starting with &quot;sy&quot; like other words: symphony, symbol, symptom. The &quot;sy&quot; sound is represented by &quot;sy&quot; not &quot;si.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common misspellings of &quot;syphilis&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common misspellings include: siphilis, syphillis, syphyllis, and syphilis. The correct spelling always starts with &quot;sy.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;syphilis&quot; used in public health contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In public health, &quot;syphilis&quot; is discussed in terms of prevention, screening, treatment, and epidemiological tracking.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the treatment options for syphilis?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Syphilis is typically treated with antibiotics, particularly penicillin, and the treatment approach depends on the stage of the infection.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell &quot;syphilis&quot; with &quot;si&quot; instead of &quot;sy&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: People often confuse &quot;si&quot; and &quot;sy&quot; because they sound similar, but &quot;syphilis&quot; specifically starts with &quot;sy&quot; like other medical terms.</p>
          </div>
        </div>
      </div>

      <div className="bg-lime-50 p-6 rounded-lg border-l-4 border-lime-500">
        <h2 className="text-2xl font-bold mb-4 text-lime-900">Word Definitions Summary</h2>
        <p className="text-lg md:text-xl text-lime-800 leading-relaxed">Word Definition Rule: <strong>Syphilis</strong> is the correct spelling with &quot;sy&quot;: s-y-p-h-i-l-i-s. &quot;Syphilis&quot; is a word referring to a sexually transmitted bacterial infection caused by Treponema pallidum. The incorrect spelling &quot;siphilis&quot; is not a recognized English word and should never be used. Always use &quot;syphilis&quot; when referring to this specific medical condition.</p>
      </div>
    </div>
  )
} 