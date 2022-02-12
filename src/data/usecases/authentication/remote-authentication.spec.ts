import HttpPostClient from "@/data/protocols/http/HttpPostClient";
import RemoteAuthentication from "./remote-authentication";

describe("RemoteAuthentication test", () => {
  it("should call HttpPostClient with corrent URL", async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;

      async post(url: string): Promise<void> {
        this.url = url;
      }
    }

    const url = "http://localhost:8080";
    const httpPostClientSpy = new HttpPostClientSpy();
    // system under test
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
