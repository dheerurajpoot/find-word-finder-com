import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Table vs Tabel - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;table&quot; vs &quot;tabel&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function TableVsTabelPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Table vs Tabel</h1>
        <p className="text-xl text-gray-600">Word Definitions & Spelling Guide</p>
      </div>

      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg mb-8 border-l-4 border-teal-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Word Definitions & Spelling Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;table&quot; and &quot;tabel&quot;. Learn word definitions, usage examples, and proper spelling patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Tabel</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Tabel&quot; is not a standard English word. The correct spelling is &quot;table.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Table</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Table&quot; is the correct spelling. It means &quot;a piece of furniture&quot; or &quot;to present data.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Table (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A piece of furniture with a flat surface; to present information in organized form; to postpone consideration.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The dining <strong>table</strong> seats six people.</li>
                  <li>• Please <strong>table</strong> the motion for now.</li>
                  <li>• The data is presented in a <strong>table</strong> format.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Tabel (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Tabel&quot; is not a standard English word and has no recognized meaning.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Tabel&quot; is not used in standard English.</li>
                  <li>• Always use <strong>table</strong> when referring to furniture or data presentation.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Table:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Desk</li>
                <li>• Counter</li>
                <li>• Chart</li>
                <li>• Grid</li>
                <li>• Postpone</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Tabel:</h4>
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
            <li>• <strong>Table</strong> is spelled with &quot;le&quot;: t-a-b-l-e.</li>
            <li>• The word comes from Latin &quot;tabula&quot; meaning &quot;board, plank.&quot;</li>
            <li>• &quot;Tabel&quot; is not a recognized English word.</li>
            <li>• Remember: table ends with &quot;le&quot; like &quot;able&quot; and &quot;cable.&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;table&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Table&quot; can function as both a noun (the furniture or data presentation) and a verb (to postpone or present). It follows standard English grammar patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;table&quot; differ from &quot;desk&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Table&quot; is a general term for a flat-surfaced furniture piece, while &quot;desk&quot; specifically refers to a table designed for work or study.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;table&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Table&quot; can be a noun (referring to furniture or data presentation) or a verb (referring to the action of postponing or presenting).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;table&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;table&quot; is perfectly acceptable in formal writing, academic papers, and professional communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;table&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Table&quot; comes from Latin &quot;tabula&quot; meaning &quot;board, plank&quot; and entered English through Old French &quot;table.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;table&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Table&quot; can be used as a noun (&quot;The table is set&quot;), verb (&quot;Let&apos;s table this discussion&quot;), or in compound forms (&quot;table manners&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;table&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: table manners, table tennis, table setting, table of contents, and table the motion.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;table&quot; and &quot;tabel&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;table&quot; ends with &quot;le&quot; (like &quot;able&quot; and &quot;cable&quot;), and emphasize that &quot;tabel&quot; is not a real word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;table&quot; used in mathematical contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;table&quot; is commonly used in mathematics to refer to organized data presentation, such as multiplication tables or data tables.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different meanings of &quot;table&quot; in various contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Table&quot; can mean furniture (dining table), data presentation (data table), or the act of postponing (table a motion).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling of &quot;table&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of &quot;table&quot; as ending with &quot;le&quot; like other common words: able, cable, stable, fable. The &quot;le&quot; ending is very common in English.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common misspellings of &quot;table&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common misspellings include: tabel, tabl, tabble, and tablle. The correct spelling always ends with &quot;le.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;table&quot; used in parliamentary procedures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In parliamentary procedures, to &quot;table&quot; a motion means to postpone consideration of it, often indefinitely.</p>
          </div>
        </div>
      </div>

      <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
        <h2 className="text-2xl font-bold mb-4 text-teal-900">Word Definitions Summary</h2>
        <p className="text-lg md:text-xl text-teal-800 leading-relaxed">Word Definition Rule: <strong>Table</strong> is the correct spelling with &quot;le&quot;: t-a-b-l-e. &quot;Table&quot; is a word of Latin origin meaning a piece of furniture with a flat surface or to present information in organized form. The incorrect spelling &quot;tabel&quot; is not a recognized English word and should never be used. Always use &quot;table&quot; when referring to furniture, data presentation, or postponing consideration.</p>
      </div>
    </div>
  )
} 