import file from "../src/file/index"

test("file.path", () => {
    expect(file.path.getFileName("")).toBe("")
    expect(file.path.getFileName("c:\\1\\2\\3.txt")).toBe("3.txt")
    expect(file.path.getFileName("c:\\1\\2\\3.txt/4.pdf")).toBe("4.pdf")
    expect(file.path.getFileName("c:\\1\\2\\3")).toBe("3")
    expect(file.path.getFileName("c:/1/2\\3")).toBe("3")
    expect(file.path.getFileName("c:\\1\\2\\")).toBe("")
    expect(file.path.getFileName("c:\\1\\2\\.abc")).toBe(".abc")
    expect(file.path.getFileName("c:\\1\\2\\3.txt/")).toBe("")

    expect(file.path.getFileNameWithoutExt("")).toBe("")
    expect(file.path.getFileNameWithoutExt("c:\\1\\2\\3.txt")).toBe("3")
    expect(file.path.getFileNameWithoutExt("c:\\1\\2\\3.txt/4.pdf")).toBe("4")
    expect(file.path.getFileNameWithoutExt("c:\\1\\2\\3")).toBe("3")
    expect(file.path.getFileNameWithoutExt("c:/1/2\\3")).toBe("3")
    expect(file.path.getFileNameWithoutExt("c:\\1\\2\\")).toBe("")
    expect(file.path.getFileNameWithoutExt("c:\\1\\2\\.abc")).toBe("")
    expect(file.path.getFileNameWithoutExt("c:\\1\\2\\3.txt/")).toBe("")

    expect(file.path.getExt("")).toBe("")
    expect(file.path.getExt("c:\\1\\2\\3.txt")).toBe(".txt")
    expect(file.path.getExt("c:\\1\\2\\3.txt/4.pdf")).toBe(".pdf")
    expect(file.path.getExt("c:\\1\\2\\3")).toBe("")
    expect(file.path.getExt("c:\\1\\2\\")).toBe("")
    expect(file.path.getExt("c:\\1\\2\\3.txt/")).toBe("")
    expect(file.path.getExt("c:\\1\\2\\3.txt/.")).toBe(".")
    expect(file.path.getExt("c:\\1\\2\\.abc")).toBe(".abc")
    expect(file.path.getExt("c:\\1\\2\\3.txt/a.b.c.d")).toBe(".d")
    expect(file.path.getExt("c:\\1\\2\\3.txt/.....")).toBe(".")

    expect(file.path.getExtWithoutDot("")).toBe("")
    expect(file.path.getExtWithoutDot("c:\\1\\2\\3.txt")).toBe("txt")
    expect(file.path.getExtWithoutDot("c:\\1\\2\\3.txt/4.pdf")).toBe("pdf")
    expect(file.path.getExtWithoutDot("c:\\1\\2\\3")).toBe("")
    expect(file.path.getExtWithoutDot("c:\\1\\2\\")).toBe("")
    expect(file.path.getExtWithoutDot("c:\\1\\2\\3.txt/")).toBe("")
    expect(file.path.getExtWithoutDot("c:\\1\\2\\3.txt/.")).toBe("")
    expect(file.path.getExtWithoutDot("c:\\1\\2\\.abc")).toBe("abc")
    expect(file.path.getExtWithoutDot("c:\\1\\2\\3.txt/a.b.c.d")).toBe("d")
    expect(file.path.getExtWithoutDot("c:\\1\\2\\3.txt/.....")).toBe("")
})